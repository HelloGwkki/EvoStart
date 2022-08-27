import Router from "vue-router"
import Vue from "vue"

import HomePage from "@/pages/HomePage.vue";
import ToolsPage from "@/pages/ToolsPage.vue";
import FileNotFoundPage from "@/pages/FileNotFoundPage.vue"

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
            path: "*",
            redirect: "/404"
        }
    ]
})