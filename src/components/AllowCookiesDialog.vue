<template>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="50%"
    >
        <v-card>
            <v-card-title>
                允许使用 Cookies 吗？
            </v-card-title>
            <v-card-text>
                本站使用 Cookies 以增强您的使用体验。
            </v-card-text>
            <v-expand-transition>
                <div v-show="show"> 
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">
                                        Cookie
                                    </th>
                                    <th class="text-left">
                                        解释
                                    </th>
                                    <th class="text-left">
                                        过期时间
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="cookie in cookiesList"
                                    :key="cookie.name">
                                    <td><code>{{ cookie.name }}</code></td>
                                    <td>{{ cookie.description }}</td>
                                    <td>{{ cookie.expireOn }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                    <v-divider></v-divider>
                    <v-card-text>
                        由于春茶偷懒，您可能每 30 天就要看到这个对话框（嘻嘻）
                    </v-card-text>
                </div>
            </v-expand-transition>
            <v-card-actions>
                <v-btn color="grey" text @click="show = !show">
                    {{ !show ? "会说就多说点" : "太长不看" }}
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="green lighten-2" text @click="allowCookies">
                    干就完了
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default{
    name: "AllowCookiesDialog",

    data() {
        return {
            dialog: false,
            show: false,
            cookiesList: [
                {
                    name: "cookiesAllowed",
                    description: "是否允许了 Cookies",
                    expireOn: "30天"
                },
                {
                    name: "searchEngine",
                    description: "使用的搜索引擎",
                    expireOn: "30天"
                },
                {
                    name: "darkModeEnabled",
                    description: "是否启用了暗黑模式",
                    expireOn: "30天"
                },
                {
                    name: "timeDisplayTo",
                    description: "时间显示到的位",
                    expireOn: "30天"
                }
            ],
        }
    },

    mounted() {
        this.$cookies.config('30d');
        if (this.$cookies.get("cookiesAllowed") == null) {
            this.dialog = true;
        }
    },

    methods: {
        allowCookies() {
            this.$cookies.set("cookiesAllowed", 1);
            this.$cookies.set("searchEngine", "baidu");
            this.$cookies.set("darkModeEnabled", 0);
            this.$cookies.set("timeDisplayTo", "minute");
            this.dialog = false;
        }
    }
}
</script>