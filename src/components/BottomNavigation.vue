<template>
    <v-bottom-navigation id="bottomNav" v-model="bottomNavigationModel" grow shift>
        <v-btn to="/calendar" exact>
            <span>日历</span>

            <v-icon>mdi-calendar</v-icon>
        </v-btn>

        <v-btn to="/" exact>
            <span>搜索</span>

            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn to="/tools" exact>
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
