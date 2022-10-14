<template>
    <v-autocomplete solo hide-details hide-no-data hide-no-details auto-select-first shaped ref="SearchBox"
        :label="'使用' + searchEngineAlias[searchEngineList.indexOf(searchEngine)] + '搜索...'" @keyup.enter="GoSearch"
        :loading="searchBoxLoading" :items="searchBoxSuggestItems" :search-input.sync="searchBoxSyncString">
        <template v-slot:prepend-inner>
            <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-ripple="{ center: true }" v-bind="attrs" v-on="on" fab>
                        <v-icon>mdi-{{ searchEngine == "baidu" ? "alien" : searchEngine }}</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-subheader>
                        选择一个搜索引擎
                    </v-subheader>
                    <v-divider></v-divider>
                    <v-list-item-group>
                        <v-list-item @click="setSearchEngine('baidu')">
                            <v-list-item-icon>
                                <v-icon>mdi-alien</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>
                                    百度
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item @click="setSearchEngine('microsoft-bing')">
                            <v-list-item-icon>
                                <v-icon>mdi-microsoft-bing</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>
                                    必应
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item @click="setSearchEngine('google')">
                            <v-list-item-icon>
                                <v-icon>mdi-google</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>
                                    谷歌
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
        </template>
        <template v-slot:append>
            <v-icon></v-icon>
        </template>
    </v-autocomplete>
</template>

<script>
import { useThrottleFn } from '@vueuse/shared';
import FetchJsonp from "fetch-jsonp";


export default {
    name: "HomepageSearchBox",

    data() {
        return {
            searchEngine: "baidu",
            searchEngineList: ["baidu", "microsoft-bing", "google"],
            searchEngineAlias: ["百度", "必应", "谷歌"],
            searchBoxLoading: false,
            searchBoxSuggestItems: [],
            searchBoxSyncString: null
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.$refs.SearchBox.focus();
        });
        switch (this.$cookies.get("searchEngine")) {
            case null:
                this.searchEngine = "baidu";
                break;
            default:
                this.searchEngine = this.$cookies.get("searchEngine");
                break;
        }
    },

    watch: {
        searchBoxSyncString(val) {
            val && val !== this.select && this.searchBoxAutoComplete(val)
        }
    },

    methods: {
        GoSearch() {
            if (this.searchBoxSyncString == "" || /^\s+$/g.test(this.searchBoxSyncString)) {
                this.searchBoxSyncString = ""
                return;
            }
            var url = "";
            if (this.searchEngine == "baidu") {
                url = "https://baidu.com/s?ie=UTF-8&wd=" + this.searchBoxSyncString;
            }
            else if (this.searchEngine == "microsoft-bing") {
                url = "https://cn.bing.com/search?q=" + this.searchBoxSyncString;
            }
            else {
                url = "https://google.com/search?q=" + this.searchBoxSyncString;
            }
            window.location.href = encodeURI(url);
        },

        setSearchEngine(s) {
            this.$cookies.set("searchEngine", s);
            this.searchEngine = s;
        },

        searchBoxAutoComplete: useThrottleFn(function () {
            let that = this

            if (that.searchBoxSyncString == "" || /^\s+$/g.test(that.searchBoxText)) {
                return;
            }

            that.searchBoxLoading = true
            switch (this.searchEngine) {
                case "baidu":
                    FetchJsonp(
                        "https://suggestion.baidu.com/su?wd=" + this.searchBoxSyncString,
                        { jsonpCallback: "cb" }
                    )
                        .then(function (res) {
                            return res.json();
                        })
                        .then(function (jsonBody) {
                            return jsonBody["s"];
                        })
                        .then(function (suggests) {
                            that.searchBoxSuggestItems = suggests
                        })
                    break;

                case "microsoft-bing":
                    FetchJsonp(
                        "https://api.bing.com/qsonhs.aspx?type=cb&q=" + this.searchBoxSyncString,
                        { jsonpCallback: "cb" }
                    )
                    .then(function (response) {
                        return response.json()
                    })
                    .then(function (jsonBody) {
                        return jsonBody["AS"]["Results"][0]["Suggests"]; //F*ck you.
                    })
                    .then(function (suggests) {
                        var proccessedSugs = eval(suggests);
                        for (const singleSug in proccessedSugs) {
                            if (Object.hasOwnProperty.call(proccessedSugs, singleSug)) {
                                const sug = proccessedSugs[singleSug];
                                that.searchBoxSuggestItems.push(sug["Txt"])
                            }
                        }
                    })
                    break;

                case "google":
                    FetchJsonp(
                        "https://suggestqueries.google.com/complete/search?client=youtube&q=" + this.searchBoxSyncString,
                        { jsonpCallback: "jsonp" }
                    )
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (jsonBody) {
                        return jsonBody[1];
                    })
                    .then(function (suggests) {
                        var processedSugs = eval(suggests);
                        for (const singleSuggest in processedSugs) {
                            if (Object.hasOwnProperty.call(processedSugs, singleSuggest)) {
                                const sug = processedSugs[singleSuggest];
                                that.searchBoxSuggestItems.push(sug[0]);
                            }
                        }
                    })
                    break;
            }

            this.searchBoxSuggestItems.push(this.searchBoxSyncString)
            this.searchBoxLoading = false
        }, 400)
    }
}
</script>
