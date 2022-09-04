<template>
    <v-card color="rgba(0,0,0,0)" flat>
        <div class="red--text d-flex justify-center tp-ani" style="font-size: 100px">
            ❌
        </div>
        <div class="red--text d-flex justify-center tp-ani" style="font-size: 100px">
            ➕
        </div>
        <div class="red--text d-flex justify-center tp-ani" style="font-size: 100px">
            ❌
        </div>
    </v-card>
</template>

<script>
import { animate } from 'motion';

export default {
    name: "ToolsPage",

    mounted() {
        animate(
            ".tp-ani",
            { transform: "rotate(90deg)" },
            { duration: .5, repeat: Infinity }
        )
    }
}
</script>
