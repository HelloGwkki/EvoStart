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
                    <v-btn class="d-flex justify-end" color="primary" @click="refreshPage">快端上来罢</v-btn>
                </v-banner>

                <v-subheader>
                    <v-icon>mdi-cogs</v-icon>
                    设置
                </v-subheader>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>时钟显示到位</v-list-item-title>
                        <v-list-item-subtitle class="amber--text">“毫秒”选项在部分设备上显示不佳</v-list-item-subtitle>
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

                <v-subheader>
                    <v-icon>mdi-beaker</v-icon>
                    实验室
                </v-subheader>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>神魂颠倒</v-list-item-title>
                        <v-list-item-subtitle>（物理）</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-spacer></v-spacer>
                    <v-btn @click="reversePage" :disabled="reverseBtnDisable">
                        {{ reverseBtnDisable ? "哈哈" : "啥？" }}
                    </v-btn>
                </v-list-item>

                <v-footer padless>
                    <v-col
                    class="text-center"
                    cols="12"
                    >
                    纯春茶用 <v-icon color="red">mdi-heart</v-icon> 制作
                    <br />
                    <v-btn href="https://github.com/HelloGwkki/EvoStart" target="_blank" text>
                        <v-icon>mdi-github</v-icon>
                        <span>Github</span>
                    </v-btn>
                    </v-col>
                </v-footer>
            </div>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>

import { animate } from 'motion';

export default {
    name: "SettingsBottomSheet",

    data() {
        return {
            timeDisplayToModel: this.$cookies.get("timeDisplayTo"),
            reverseBtnDisable: false
        }
    },

    methods: {
        selectTimeDisplayToItem(item) {
            this.$cookies.set("timeDisplayTo", item);
        },
        
        reversePage() {
                animate(
                    "#app",
                    { transform: "rotate(200deg)" },
                    { duration: 3 }
                );
            this.reverseBtnDisable = true
        },

        refreshPage() {
            this.$nextTick(() => {
                window.location.reload()
            })
        }
    },

    computed: {
        bottomSheetModel: {
            get() {
                return this.$store.state.bottomSheetModel
            },

            set(newVal) {
                this.$store.commit("toggleBottomSheetModel")
            }
        }
    }
}
</script>
