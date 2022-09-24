<template>
    <div>
        <v-app-bar id="appbar" dark app flat>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title id="appbarTitle">EvoStart</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon @click="toggleMode" v-bind="attrs" v-on="on">
                        <v-icon>
                            {{ $vuetify.theme.dark ? "mdi-brightness-4" : "mdi-brightness-7" }}
                        </v-icon>
                    </v-btn>
                </template>
                <span>切换至{{ $vuetify.theme.dark ? "亮色" : "暗色" }}模式</span>
            </v-tooltip>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app temporary absolute>
            <v-card class="primary" tile flat>
                <v-card-title class="white--text text-h5">EvoStart</v-card-title>
                <v-card-actions>
                    <v-btn color="white" :href="'https://github.com/HelloGwkki/EvoStart/commit/' + gitHash" text>
                        v{{ VERSION }}@{{ gitHash }}
                    </v-btn>
                </v-card-actions>
            </v-card>
            <v-list nav dense>
                <v-list-item-group v-model="group">
                    <v-list-item @click="drawerItemClicked('home')">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            主页
                        </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
                <v-list-item @click="drawerItemClicked('easterEgg')">
                    <v-list-item-icon>
                        <v-icon>mdi-egg-easter</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        彩蛋
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn color="primary" @click="changeBottomSheetModel" block outlined>
                        <v-icon>
                            mdi-cog
                        </v-icon>
                        设置
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-snackbar v-model="snackbar" bottom right>
            {{ snackbarText }}
        </v-snackbar>
    </div>
</template>

<script>
import config from "../../package.json";

export default {
    name: "HomepageNavigation",

    data: () => ({
        VERSION: config.version,
        drawer: false,
        group: null,
        snackbar: false,
        snackbarText: "",
        gitBranch: process.env.GIT_BRANCH,
        gitHash: process.env.GIT_COMMITHASH.substring(0, 6)
    }),

    mounted() {
        this.$vuetify.theme.dark = this.$cookies.get("darkModeEnabled") == "true" ? true : false;
    },

    methods: {
        toggleMode() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            this.$cookies.set("darkModeEnabled", this.$vuetify.theme.dark);
        },

        drawerItemClicked(target) {
            if (target == "home") {
                this.drawer = false;
                this.snackbarText = " (づ￣ 3￣)づ | 欢迎回来";
                this.snackbar = true;
            } else if (target == "easterEgg") {
                window.location.href = "https://b23.tv/BV1GJ411x7h7"
            }
        },

        changeBottomSheetModel() {
            this.$store.commit("toggleBottomSheetModel");
            this.drawer = false;
        }
    },
}
</script>

<style scoped>
#appbar {
    background-color: rgba(255, 255, 255, 0);
}

#appbarTitle {
    font-family: 'Righteous', cursive;
}
</style>
