<template>
    <v-bottom-navigation id="bottomNav" v-model="bottomNavigationModel" grow shift>
        <v-btn to="/collections">
            <span>收藏</span>

            <v-icon>mdi-star</v-icon>
        </v-btn>

        <v-btn to="/" exact>
            <span>搜索</span>

            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn to="/tools">
            <span>工具</span>

            <v-icon>mdi-hammer-screwdriver</v-icon>
        </v-btn>
    </v-bottom-navigation>

</template>

<script>
export default {
    name: "BottomNavigation",

    data() {
        return {
            bottomNavigationModel: 1
        }
    }
}
</script>
