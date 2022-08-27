import Router from "vue-router"
import Vue from "vue"

import HomePage from "@/pages/HomePage.vue";
import CalendarPage from "@/pages/CalendarPage.vue";
import ToolsPage from "@/pages/ToolsPage.vue";

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
            path: "/calendar",
            name: "CalendarPage",
            component: CalendarPage
        },
        {
            path: "/tools",
            name: "ToolsPage",
            component: ToolsPage
        },
        {
            path: "*",
            redirect: "/search"
        }
    ]
})