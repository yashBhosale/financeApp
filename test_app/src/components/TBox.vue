<template>
<span v-on:click="hello">
    | {{value}}
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
            this.$emit('clicked', this.rowId, this.colId);
        }

    }
}
</script>
