<template>
    <p class="text-subtitle-2 text--secondary" id="hitokoto">
        {{ hitokoto }}
    </p>
</template>

<script>
import { animate } from 'motion';


export default {
    name: "HomepageHitokoto",

    data() {
        return {
            hitokoto: "( •̀ .̫ •́ )✧"
        }
    },

    mounted() { 
        let that = this
        fetch("https://v1.hitokoto.cn/?encode=text").then(function (response) {
            return response.blob();
        }).then(function(response) {
            return response.text();
        }).then(function (hitokoto) {
            that.hitokoto = hitokoto;
        });

        animate(
            "#hitokoto",
            { opacity: 1 },
            { delay: .2, duration:.5 }
        )
    }
}
</script>

<style scoped>
#hitokoto {
    opacity: 0;
}
</style>
