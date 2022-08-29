<style>
@import "./assets/style/style.css";
</style>
<template>
    <v-app>
        <!--navigation bar and drawer-->
        <HomepageNavigation />

        <!--Padding for appbar-->
        <div :style="{ 'padding-top': toolbarHeight + 'px' }"></div>

        <transition name="fade" mode="out-in">
            <router-view id="routerView"></router-view>
        </transition>

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

    mounted() {
        this.$vuetify.theme.dark = this.$store.state.preferredDark;
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>