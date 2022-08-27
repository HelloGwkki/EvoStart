<template>
    <v-bottom-sheet v-model="bottomSheetModel" inset>
        <v-sheet>
            <v-btn class="mt-6" text color="red" @click="bottomSheetModel = !bottomSheetModel">
                <v-icon>
                    mdi-close
                </v-icon>
            </v-btn>
            <div class="mx-auto" style="width: 85%">
                <v-banner>
                    <v-icon slot="icon" color="warning" size="36">
                        mdi-alert
                    </v-icon>
                    部分设置更改后可能需要重载页面（心虚）
                    <template v-slot:actions="{ dismiss }">
                        <v-btn color="primary" @click="dismiss">Sodayo</v-btn>
                    </template>
                </v-banner>
                <v-subheader>设置</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>时钟显示到位</v-list-item-title>
                        <v-list-item-subtitle>“毫秒”选项在部分设备上显示不佳</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-spacer></v-spacer>
                    <v-btn-toggle v-model="timeDisplayToModel" mandatory rounded>
                        <v-btn value="minute" @click="selectTimeDisplayToItem('minute')">
                            分钟
                        </v-btn>
                        <v-btn value="second" @click="selectTimeDisplayToItem('second')">
                            秒
                        </v-btn>
                        <v-btn value="millisecond" @click="selectTimeDisplayToItem('millisecond')">
                            毫秒
                        </v-btn>
                    </v-btn-toggle>
                </v-list-item>
                <v-footer padless>
                    <v-col
                    class="text-center"
                    cols="12"
                    >
                    纯春茶用 <v-icon color="red">mdi-heart</v-icon> 制作
                    <br />
                    <v-btn href="https://github.com/HelloGwkki" target="_blank" text>
                        <v-icon>mdi-github</v-icon>
                        <span>Github</span>
                    </v-btn>
                    <v-btn href="https://twitter.com/chunchaqwq" target="_blank" color="#00acee" text>
                        <v-icon>mdi-twitter</v-icon>
                        <span>Twitter</span>
                    </v-btn>
                    </v-col>
                </v-footer>
            </div>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>
export default {
    name: "SettingsBottomSheet",

    data() {
        return {
            timeDisplayToModel: this.$cookies.get("timeDisplayTo")
        }
    },

    methods: {
        selectTimeDisplayToItem(item) {
            this.$cookies.set("timeDisplayTo", item);
        }
    },

    computed: {
        bottomSheetModel: {
            get() {
                return this.$store.state.bottomSheetModel
            },

            set(newVal) {
                this.$store.commit("changeBottomSheetModel")
            }
        }
    }
}
</script>