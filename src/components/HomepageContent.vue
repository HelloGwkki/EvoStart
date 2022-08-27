<template>
    <v-container bg grid-list-md text-xs-center fill-height>
        <v-layout row wrap align-center>
            <v-flex>
                <v-card class="rounded-lg" id="HomepageContent" max-width="1000">
                    <HomepageSearchBox />
                    <div style="height:50px"></div>
                    <HomepageClock />
                    <div style="height:5px;"></div>
                    <HomepageHitokoto />
                    <div style="height:50px;"></div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import HomepageClock from "./HomepageClock.vue";
import HomepageHitokoto from "./HomepageHitokoto.vue";
import HomepageSearchBox from "./HomepageSearchBox.vue";

export default {
    name: "HomepageContent",

    components: {
        HomepageClock,
        HomepageSearchBox,
        HomepageHitokoto
    },
}
</script>