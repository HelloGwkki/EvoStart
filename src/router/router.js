import Vue from "vue"
import Router from "vue-router"

import HomePage from "@/pages/HomePage.vue";
import ToolsPage from "@/pages/ToolsPage.vue";
import FileNotFoundPage from "@/pages/FileNotFoundPage.vue"
import TranslateTool from "@/pages/tools/translate.vue"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/search"
        },
        {
            path: "/search",
            name: "HomePage",
            component: HomePage
        },
        {
            path: "/tools",
            name: "ToolsPage",
            component: ToolsPage
        },
        {
            path: "/404",
            name: "FileNotFoundPage",
            component: FileNotFoundPage
        },
        {
            path: "/tools/translate",
            name: "TranslatePage",
            component: TranslateTool
        },
        {
            path: "*",
            redirect: "/404"
        }
    ]
})