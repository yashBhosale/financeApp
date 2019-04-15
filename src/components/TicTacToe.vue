<template>
<div>
    <div v-for="(row, rowIndex) in grid" v-bind:key="rowIndex" >
    <!--    adding the ":" in front of it tells the component that this is a prop field, and you can 
            set it equal to a data field at this level. Thus, when 
            the data field is changed, the prop is changed and the element is re-rendered
            This is how data gets pushed downwards -->
        <TBox v-for="(box, colIndex) in row" v-bind:key="colIndex" :value=xVal @lol="hello" :rowId=rowIndex :colId=colIndex ></TBox>
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
            grid : [
                 [0,0,0],
                 [0,0,0],
                 [0,0,0]
            ]
        }
    },

    methods:{
        hello: function(){
            // alert(this.xVal); 
            this.xVal++;
        }

    }
}
</script>
