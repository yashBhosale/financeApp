
<template>
    <div
        v-bind:style="{'display': 'flex', 'flex-direction': 'column','justify-content': 'space-around'}"
    >
        <v-toolbar v-bind:style="{'transform':'unset'}">
            
            <multiselect v-model="value" @select="addToTable" @remove="removeFromTable" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
            </multiselect>

        </v-toolbar>
        <v-app id="DataTable">
            <v-data-table
            :headers="headers"
            :items="transactions"
            class="elevation-1"
            
            >
                <template v-slot:items="props">
                    <td>{{ props.item.id}}
                    <td>{{ props.item.category }}</td>
                    <td>{{ props.item.amount }}</td>
                    <td>{{ props.item.date }}  </td>

                </template>
            </v-data-table>
        </v-app>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import * as dbConnector from "../assets/Database/database.js"

export default {
    name: 'DatabaseTable',
    components:{
        Multiselect
    },
    methods:{
        async addToTable (selectedOption) {
            this.searchSettings.categories.add(selectedOption)  
            let temp = await dbConnector.fetch(this.searchSettings)
            // This is O(nlgn), I couldn't really find a faster way to do it even though it feels like there should be one.
            // Although, space-time paradox I guess
            temp.map(transaction => this.transactions.push(transaction))
            this.transactions = this.transactions.sort((a,b) => a.id - b.id)
            
        },

        // replaces the transactions list with a list that is the same, but doesn't have any of the 
        // items from the selected option. Apparently vue is really good at quickly re-rendering
        // lists that have only minor difference so this is probably not a performance issue? 
        removeFromTable(selectedOption) {

            this.transactions = this.transactions.filter(transaction => transaction.category != selectedOption)
            this.searchSettings.categories.delete(selectedOption)
        }

    },
    data: function(){
        return {
            headers:[
                {text: "Transaction", value: "id"},
                {text: "Category", value:"category"},
                {text: "Amount", value: "amount"},
                {text: "date", value: "date"},
            ],
            // this is necessary- it's what holds the current list that's being
            transactions:[],

            value: [],
            // searchsettings doesn't need to be DOM-reactive
            searchSettings: {
                categories: new Set([]),
                amount_min: 0,
                amount_max: Number.MAX_VALUE,
                date_min: 0,
                date_max: Number.MAX_VALUE
            },
            options: [
                'Dance',
                'Class',
                'Water Bottle'
            ]

        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>