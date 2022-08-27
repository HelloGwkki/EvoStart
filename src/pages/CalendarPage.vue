<template>
    <v-container bg grid-list-md text-xs-center fill-height >
        <v-layout row wrap align-center >
            <v-flex>
                <v-card class="rounded-lg" id="CalendarPageContent" >
                    <v-date-picker
                        v-model="date"
                        readonly
                        full-width
                        landscape
                    ></v-date-picker>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: "CalendarPage",

    data() {
        return {
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
        }
    }
}
</script>