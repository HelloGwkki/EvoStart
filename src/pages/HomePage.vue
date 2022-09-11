<template>
    <div id="homepage">
        <!--Content-->
        <HomepageContent />

    </div>
</template>

<script>
import HomepageContent from "@/components/HomepageContent.vue";

export default {
    name: "HomePage",

    components: {
        HomepageContent
    },

    computed: {
        toolbarHeight: function () {
            return this.$vuetify.application.top;
        }
    }
}
</script>
