<template>
<div>
    <div v-for="(row, rowIndex) in grid" v-bind:key="rowIndex" >
    <!--    adding the ":" in front of it tells the component that this is a prop field, and you can 
            set it equal to a data field at this level. Thus, when 
            the data field is changed, the prop is changed and the element is re-rendered
            This is how data gets pushed downwards -->
        <TBox v-for="(box, colIndex) in row" v-bind:key="colIndex" @clicked="hello" :rowId=rowIndex :colId=colIndex :value=grid[rowIndex][colIndex] ></TBox>
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

    // this is the section where the component holds its own state, I think.
    data: function() {
        return {
            grid : [
                 ['_','_','_'],
                 ['_','_','_'],
                 ['_','_','_']
            ],
            turn: 'x'

        }
    },

    methods:{
        hello: function(rowId, colId){
            
            if (this.grid[rowId][colId] == '_')
                this.$set(this.grid[rowId], colId, this.turn );

            this.turn = (this.turn == 'x') ? 'o' : 'x' ; 
        }

    }
}
</script>
