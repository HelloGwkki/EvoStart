<template>
    <v-container>
        <v-layout row wrap align-center>
            <v-flex>
                <v-card class="rounded-lg" id="TranslateToolContent" max-width="1000">
                    <v-textarea
                        solo
                        flat
                        hide-details
                        no-resize
                        label="源文本"
                        name="input-7-1"
                        value=""
                        v-model="sourceBoxModel"
                    ></v-textarea>
                    <v-item-group class="d-flex justify-center">
                        <v-btn icon large :disabled="!resultBoxModel" @click="copyResult">
                            <v-icon>{{ !resultCopied ? "mdi-content-copy" : "mdi-check" }}</v-icon>
                        </v-btn>
                        <v-btn icon large>
                            <v-icon>mdi-arrow-down</v-icon>
                        </v-btn>
                        <v-btn icon large :disabled="!sourceBoxModel" @click="clearSource">
                            <v-icon>mdi-delete-outline</v-icon>
                        </v-btn>
                    </v-item-group>
                    <v-textarea
                        solo
                        flat
                        disabled
                        hide-details
                        no-resize
                        label="翻译"
                        name="input-7-1"
                        value=""
                        v-model="resultBoxModel"
                        ref="resultBox"
                    ></v-textarea>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { useThrottleFn, useClipboard } from "@vueuse/core";
import { ref } from "vue";

const clipSource = ref('resultBox')
const { copy, copied } = useClipboard({ clipSource });

export default {
    name: "TranslateTool",

    data() {
        return {
            sourceBoxModel: "",
            resultBoxModel: "",
            resultCopied: copied
        }
    },

    methods: {
        clearSource(){
            this.sourceBoxModel = "";
            this.resultBoxModel = "";
        },
        copyResult(){
            copy(this.resultBoxModel);
        }
    },

    watch: {
        sourceBoxModel: useThrottleFn(function(){
            let that = this

            //TODO: Support type arg
            if (!this.sourceBoxModel == ""){
                fetch(`/api/translate?src=${this.sourceBoxModel}&type=AUTO`)
                .then(function (res) {
                    return res.json();
                })
                .then(function (json) {
                    return json["data"]["translateResult"][0][0]["tgt"];
                })
                .then(function(data) {
                    that.resultBoxModel = data;
                })
                .catch(function(reason) {
                    that.resultBoxModel = `😥 | Something went wrong.\n---\n${reason}\n---`;
                })
            } else { return; }
        }, 400)
    },
}
</script>

<style scoped>
    #TranslateToolContent {
        margin: 0 auto;
    }
</style>
