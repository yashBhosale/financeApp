import axios from "axios";

var test = true

// for testing purposes
var transactionBank = [
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
]

export async function fetch(searchSettings){
    // this will change - it's basically just because I was using a terrible testing setup
    if (test)
        return transactionBank.filter(transaction => searchSettings.categories.has(transaction.category) )   
    
    const fetched = await axios.get('localhost', {
        params:{searchSettings}
    })
    
    
    
    return fetched
}

