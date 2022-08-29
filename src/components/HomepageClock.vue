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
            newDate: new Date()
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
            { delay: .2, duration:.5, easing: [0, .25, .75, 1] }
        )
    },

    methods: {
        getCurrentTime(newDate) {
            var hour = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
            var minute = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
            var second = newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds();
            var millisecond = newDate.getMilliseconds() < 10 ? '00' + newDate.getMilliseconds() : (newDate.getMilliseconds() < 100 ? '0' + newDate.getMilliseconds() : newDate.getMilliseconds());
            switch (this.$cookies.get("timeDisplayTo")) {
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
#HomepageClock {
    opacity: 0;
    transform: translateY(-50px);
}
</style>