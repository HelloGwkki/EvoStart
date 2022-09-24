<template>
  <v-alert
    colored-border
    type="warning"
    icon="mdi-alert-outline"
    border="bottom"
    elevation="10"
    class="mx-10 py-6 hidden-md-and-up"
  >
    EvoStart 主要为桌面端设计。在移动端上显示不佳且可能出现未预料的问题。
  </v-alert>
</template>

<script>
export default {
  name: "MobileDeviceAlert",
};
</script>

<style scoped>
</style>