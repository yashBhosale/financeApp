<template>
<span v-on:click="hello">
    {{data}}
</span>

</template>

<script>
export default {
    name: 'TBox',
    props: {
        value: String,
    },
    data: function(){
        return {
            data: ''
        }
    },
  
    methods:{
        hello: function(){ 
            this.$emit('lol', this.message);
        }

    }
}
</script>
