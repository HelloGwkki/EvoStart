<template>
    <div>
        <v-toolbar id="appbar">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>春茶の主页</v-toolbar-title>
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
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app temporary>
            <v-card class="mx-auto" tile flat>
                <v-img src="https://img1.imgtp.com/2022/08/27/zp6XB0S0.jpg">
                    <v-card-text class="white--text text-h5 mt-16">春茶の主页</v-card-text>
                </v-img>
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
                    <v-btn block class="success" @click="changeBottomSheetModel">
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


export default {
    name: "HomepageNavigation",

    data: () => ({
        drawer: false,
        group: null,
        snackbar: false,
        snackbarText: "",
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
            this.$store.commit("changeBottomSheetModel");
            this.drawer = false;
        }
    },
}
</script>