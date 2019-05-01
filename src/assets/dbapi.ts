import {createConnection, ConnectionOptions, Connection, ConnectionOptionsReader, createQueryBuilder, createConnections, AdvancedConsoleLogger} from "typeorm"
import {Product} from "./Models/Product"
import {Transaction} from "./Models/Transaction"



let TEST = true;

async function connectToDatabase(): Promise<Connection>{
    let connection: Connection;
    if (TEST){
        connection = await createConnection("test");}
    else{
        connection = await createConnection("prod");
    }
    return connection;
}

async function init() {
    const connection = await connectToDatabase();
    await connection.synchronize();

   await connection.close();
}

async function insertTransactions(transactions: Array<any>){
    const connection = await connectToDatabase();
    let newProducts : Array<any> = [];

    // TODO: make sure this works how you think it does
    for (const transaction of transactions){
        try{
            const product = await connection.createQueryBuilder()
                .select("product")
                .from(Product, "product")
                .where("product.name = :product_name", {product_name: transaction.product_type})
                .execute();
            transaction.product_type = product[0].product_id
            console.log(Object.keys(product[0]))
            connection.createQueryBuilder()
                .insert()
                .into(Transaction)
                .values([transaction])
                .execute();
            
            

            // await connection.getRepository(Transaction).save(tempTransaction);
         }

         catch(err){
            console.log("hello!")
            console.log(err);
            newProducts.push( {name :  transaction.product_type, category : 'unknown', transactions : []} )
         }
    
        }

    await connection.close();
    if(newProducts.length > 0){
        await insertProducts(newProducts);
    }
    await connection.connect()


    
    await connection.close();

    return;
}

async function insertProducts(products: Array<any> ){
    const connection = await connectToDatabase();
    
    //make sure this works before you try testing 
    try {
        await connection.createQueryBuilder()
        .insert()
        .into(Product)
        .values(products)
        .execute();
    }
    catch(err){
        console.log(err)
    }

    await connection.close();
    return;
}

async function findTransaction(){}

async function findProduct(){}

async function deleteTransaction(){}

async function deleteProduct(){}

async function testFunctions(){
    await init();

    let productData = [
        {
            name: "Dance",
            category: "Ticket",
            transactions: []
        },
        {
            name: "Class",
            category: "Ticket",
            transactions: []
        },
        {
            name: "Water Bottle",
            category: "Water Bottle",
            transactions: []
        },
        

    ]
    await insertProducts(productData);

    let transactions = [
        {
            product_type: "Dance",
            transaction_date: Date.now,
            amount:5
        },
        {
            product_type: "Water Bottle",
            transaction_date: Date.now,
            amount:1
        }
    ]
    await insertTransactions(transactions);

    return;
}

testFunctions();

