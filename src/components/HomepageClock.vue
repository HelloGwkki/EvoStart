<template>
    <div id="HomepageClock">
        {{ getCurrentTime(newDate) }}
    </div>
</template>

<script>
import { animate } from 'motion';


export default {
    name: "HomepageClock",

    data() {
        return {
            newDate: new Date(),
            timeDisplayTo: this.$cookies.get("timeDisplayTo")
        }
    },

    mounted() {
        let that = this
        this.DateUpdater = setInterval(() => {
            that.newDate = new Date()
        });
        animate(
            "#HomepageClock",
            { opacity: 1, transform: "none" },
            { delay: .2, duration:.5 }
        )
    },

    methods: {
        getCurrentTime(newDate) {
            var hour = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
            var minute = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
            var second = newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds();
            var millisecond = newDate.getMilliseconds() < 10 ? '00' + newDate.getMilliseconds() : (newDate.getMilliseconds() < 100 ? '0' + newDate.getMilliseconds() : newDate.getMilliseconds());
            switch (this.timeDisplayTo) {
                case "second":
                    return hour + ':' + minute + ':' + second;
                
                case "millisecond":
                    return hour + ':' + minute + ':' + second + '.' + millisecond;

                default:
                    return hour + ':' + minute;
            }
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: HarmonySans;
    src: url(https://cdn.jsdelivr.net/gh/HelloGwkki/hellogwkki.github.io@main/HarmonyOS_Sans_Black.ttf);
}

#HomepageClock {
    opacity: 0;
    font-family: HarmonySans;
    font-size: 40px;
    letter-spacing: 3px;
}
</style>
