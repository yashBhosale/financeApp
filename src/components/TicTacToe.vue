<template>
<div>
<div>
    <TBox :value=xVal @lol="hello"></TBox>
    <TBox @lol="hello"></TBox>
    <TBox @lol="hello"></TBox>
</div>
<div>
    <TBox @lol="hello"></TBox>
    <TBox @lol="hello"></TBox>
    <TBox @lol="hello"></TBox>
</div>
<div>
    <TBox @lol="hello"></TBox>
    <TBox @lol="hello"></TBox>
    <TBox @lol="hello"></TBox>
</div>
</div>
</template>

<script>
import TBox from './TBox.vue';
export default {
    name: 'TicTacToe',
    
    components: {
        TBox
    },
    data: function() {
        return {
            xVal : 1
        }
    },

    methods:{
        hello: function(){
            alert(this.xVal); 
            this.xVal++;
        }

    }
}
</script>
