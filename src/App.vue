<style>
@import "./assets/style/style.css";
</style>
<template>
    <v-app>
        <!--navigation bar and drawer-->
        <HomepageNavigation />

        <!--Padding for appbar-->
        <div :style="{ 'padding-top': toolbarHeight + 'px' }"></div>

        <router-view id="routerView"></router-view>

        <!--bottom navigation bar-->
        <BottomNavigation />

        <!--Bottom Sheet-->
        <SettingsBottomSheet />
    </v-app>
</template>

<script>
import HomepageNavigation from "@/components/HomepageNavigation.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";
import SettingsBottomSheet from "@/components/SettingsBottomSheet.vue";

export default {
    name: 'App',

    components: {
        HomepageNavigation,
        BottomNavigation,
        SettingsBottomSheet
    },

    computed: {
        toolbarHeight: function () {
            return this.$vuetify.application.top;
        }
    },
};
</script>
