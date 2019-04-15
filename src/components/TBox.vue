<template>
<span v-on:click="hello">
    | {{rowId}}, {{colId}}
</span>

</template>

<script>
export default {
    name: 'TBox',
    props: {
        value: String,
        id: Number,
        rowId: Number,
        colId: Number

    },
  
    methods:{
        hello: function(){ 
            this.$emit('lol', this.message);
        }

    }
}
</script>
