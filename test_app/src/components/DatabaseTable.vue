
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

export default {
    name: 'DatabaseTable',
    components:{
        Multiselect
    },
    methods:{
        addToTable (selectedOption) {
            let temp = this.transactionBank.filter(transaction => transaction.category == selectedOption)     
            temp.map(transaction => this.transactions.push(transaction))
        },
        removeFromTable(selectedOption) {

            let temp = this.transactionBank.filter(transaction => transaction.category == selectedOption)
            temp.map(transaction => this.transactions.pop(transaction))   
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
            transactions:[
                
            ],
            transactionBank: [
                {
                    id:1,
                    category: "Dance",
                    transaction_date: new Date(),
                    amount:5
                },
                {
                    id:2,
                    category: "Class",
                    transaction_date:  new Date(),
                    amount:1
                },
                {
                    id:3,
                    category: "Dance",
                    transaction_date:  new Date(),
                    amount:1
                },
                {
                    id:4,
                    category: "Dance",
                    transaction_date:  new Date(),
                    amount:1
                },
                {
                    id:5,
                    category: "Water Bottle",
                    transaction_date:  new Date(),
                    amount:1
                },
                {
                    id:6,
                    category: "Class",
                    transaction_date:  new Date(),
                    amount:1
                }
            ],
            value: [],
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