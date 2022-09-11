<template>
    <div>
        <v-container>
            <v-row align="center">
                    <v-col v-for="(tool, index) in toolsList" :key="index">
                        <v-card v-ripple class="pa-6" :to="tool.link">
                            <v-card-title class="text-h6">
                                <v-icon large>
                                    {{ tool.icon }}
                                </v-icon>
                                {{ tool.name }}
                            </v-card-title>
                        </v-card>
                    </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { animate } from 'motion';

export default {
    name: "ToolsPage",

    data() {
        return {
            toolsList: [
                {
                    name: "翻译",
                    icon: "mdi-translate",
                    link: "/tools/translate"
                },
                {
                    name: "你先别急",
                    icon: "mdi-close",
                    link: "/tools"
                },
                {
                    name: "你先别急",
                    icon: "mdi-close",
                    link: "/tools"
                }
            ]
        }
    },

    mounted() {
    }
}
</script>
