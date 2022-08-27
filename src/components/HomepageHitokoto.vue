<template>
    <p class="text-subtitle-2 text--secondary">
        {{ hitokoto }}
    </p>
</template>

<script>

export default {
    name: "HomepageHitokoto",

    data() {
        return {
            hitokoto: "( •̀ .̫ •́ )✧"
        }
    },

    mounted() { 
        let that = this
        fetch("https://v1.hitokoto.cn/?c=a&c=c&c=i&c=h&encode=text").then(function (response) {
            return response.blob();
        }).then(function(response) {
            return response.text();
        }).then(function (hitokoto) {
            that.hitokoto = hitokoto;
        });
    }
}
</script>