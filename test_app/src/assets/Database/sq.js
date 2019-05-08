const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './ledger.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// const Transaction = sq.define("transaction",{
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     cashflow:{
//         type: Sequelize.FLOAT,
//         allowNull: false
//     },
//     date: {
//         type: Sequelize.DATE,
//         allowNull: false
//     }
    
// }, {});

// const Product = sq.define('product', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name:{
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     category:{
//         type: Sequelize.STRING,
//         allowNull: false
//     }


// }, {})

// Product.hasMany(Transaction);
// Transaction.belongsTo(Product);


sequelize.close()