<template>
    <div id="HomepageClock">
        {{ getCurrentTime(newDate) }}
    </div>
</template>

<script>
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