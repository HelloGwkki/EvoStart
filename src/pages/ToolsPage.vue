<template>
    <v-card>
        <p class="red--text" id="ani" style="font-size: 100px">急</p>
    </v-card>
</template>

<script>
import { animate } from 'motion';

export default {
    name: "ToolsPage",

    mounted() {
        animate(
            "#ani",
            { transform: "rotate(360deg)" },
            { duration: .5, repeat: Infinity }
        )
    }
}
</script>
