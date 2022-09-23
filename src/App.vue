<template>
    <v-app id="app">
        <!--navigation bar and drawer-->
        <HomepageNavigation />

        <!--Padding for appbar-->
        <div :style="{ 'padding-top': toolbarHeight + 'px' }"></div>

        <v-main>
            <transition name="fade" mode="out-in">
                <router-view id="routerView"></router-view>
            </transition>
        </v-main>

        <!--bottom navigation bar-->
        <BottomNavigation />

        <!--Bottom Sheet-->
        <SettingsBottomSheet />

        <!--Allow Cookies Dialog-->
        <AllowCookiesDialog />

    </v-app>
</template>

<script>
import HomepageNavigation from "@/components/HomepageNavigation.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";
import SettingsBottomSheet from "@/components/SettingsBottomSheet.vue";
import AllowCookiesDialog from "./components/AllowCookiesDialog.vue";

export default {
    name: 'App',

    components: {
        HomepageNavigation,
        BottomNavigation,
        SettingsBottomSheet,
        AllowCookiesDialog
    },

    computed: {
        toolbarHeight: function () {
            return this.$vuetify.application.top;
        }
    },
};
</script>

<style scoped>
#routerView {
    height: 100%;
    width: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

<!--General-->
<style>
::-webkit-scrollbar {
    display: none;
}

.theme--light .v-application--wrap {
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("img/background.jpg") !important;
}
</style>