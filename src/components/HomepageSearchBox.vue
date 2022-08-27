<template>
    <v-text-field solo hide-details :label="'使用' + searchEngineAlias[searchEngineList.indexOf(searchEngine)] + '搜索...'" append-icon="mdi-magnify"
        v-model="searchBoxText" class="input-search" autocomplete="off" ref="SearchBox" @keyup.enter="GoSearch" shaped
        @click:append="GoSearch">
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
    </v-text-field>
</template>

<script>

export default {
    name: "HomepageSearchBox",

    data() {
        return {
            searchBoxText: "",
            searchEngine: "baidu",
            searchEngineList: ["baidu", "microsoft-bing", "google"],
            searchEngineAlias: ["百度", "必应", "谷歌"],
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

    methods: {
        GoSearch() {
            if (this.searchBoxText == "" || /^\s+$/g.test(this.searchBoxText)){
                this.searchBoxText = ""
                return;
            }
            var url = "";
            if (this.searchEngine == "baidu"){
                url = "https://baidu.com/s?ie=UTF-8&wd=" + this.searchBoxText;
            }
            else if (this.searchEngine == "microsoft-bing"){
                url = "https://cn.bing.com/search?q=" + this.searchBoxText;
            }
            else {
                url = "https://google.com/search?q=" + this.searchBoxText;
            }
            window.location.href = encodeURI(url);
        },

        setSearchEngine(s) {
            this.$cookies.set("searchEngine", s);
            this.searchEngine = s;
        },
    }
}
</script>