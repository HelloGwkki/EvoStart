<template>
    <div id="homepage">
        <!--Content-->
        <HomepageContent />

        <!--Allow Cookies Dialog-->
        <AllowCookiesDialog />

    </div>
</template>

<script>
import HomepageContent from "@/components/HomepageContent.vue";
import AllowCookiesDialog from "@/components/AllowCookiesDialog.vue";

export default {
    name: "HomePage",

    components: {
        HomepageContent,
        AllowCookiesDialog
    },

    computed: {
        toolbarHeight: function () {
            return this.$vuetify.application.top;
        }
    }
}
</script>