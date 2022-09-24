<template>
    <v-bottom-navigation id="bottomNav" color="primary" v-model="bottomNavigationModel" grow shift flat>
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
    },

    watch: {
        $route(to, from){
            switch (to.path) {
                case "/search":
                    this.bottomNavigationModel = 1
                    break;
                
                case "/tools":
                    this.bottomNavigationModel = 2
                    break;

                default:
                    this.bottomNavigationModel = 2
                    break;
            }
        }
    }
}
</script>

<style scoped>
.theme--light #bottomNav {
    background-color: rgba(255, 255, 255, .4);
    backdrop-filter: blur(5px);
}
</style>
