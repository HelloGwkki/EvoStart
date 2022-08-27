<template>
    <v-container bg grid-list-md text-xs-center fill-height>
        <v-layout row wrap align-center>
            <v-flex>
                <v-card class="rounded-lg text-center">
                    <div style="height:70px"></div>
                    <span class="text-h4 red--text">404 | File Not Not Not Found</span>
                    <div style="height:50px"></div>
                    <v-btn class="success" to="/search">我不打扰</v-btn>
                    <div style="height:70px"></div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: "FileNotFoundPage"
}
</script>