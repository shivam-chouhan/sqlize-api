const {Sequelize , DataTypes} = require('sequelize')
import express from 'express'
import { getDataRouter } from './routes/getData';
import { createDataRouter } from "./routes/createData";
import { updateDataRouter } from './routes/updateData';
import { deleteDataRouter } from './routes/deleteData';
let pass = 'Shivam123' 
let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

export  const connection = new Sequelize({
    host: 'localhost',
    port : '5432',
    dialect: 'postgres',
    username: 'postgres',
    password: pass,
    database: 'sqlize'
})
app.use(express.json())
app.use('/getData', getDataRouter);
app.use('/createData', createDataRouter);
app.use('/updateData', updateDataRouter);
app.use('/deleteData', deleteDataRouter);

const PORT = process.env.PORT || 5000;


export const Users = connection.define('Users',{
    id:{
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    firstName : {
        type : DataTypes.STRING,
        allownull : false
    },
    middleName: DataTypes.STRING,
    lastName:{ 
        type: DataTypes.STRING,
        allownull : false
    },
    email: {
        type: DataTypes.STRING,
        allownull : false
    },
    phone : {
        type: DataTypes.STRING,
        allownull : false
    },
    address :{
        type: DataTypes.STRING,
        allownull : false
    },
    CustomerId :{
        type: DataTypes.INTEGER,
        allownull : false

    },
    roleId : {
        type: DataTypes.INTEGER,
        allownull : false
    }


})
export const Customers = connection.define('Customers',{
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    name : {
        type : DataTypes.STRING,
        allownull : false
},
    website :{
        type : DataTypes.STRING,
        allownull: false
    },
    customerAddress:{
        type: DataTypes.STRING,
        allownull : false
    }
});

export const roles = connection.define('roles',{
    id: {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    roleName: {
        type: DataTypes.STRING,
        allownull:false
    }
})

Customers.hasMany(Users);
Users.belongsTo(Customers);
roles.hasMany(Users);
Users.belongsTo(roles);

connection
.sync({
    logging : console.log
})
.then(() => {
    console.log('connection to the database established');
    app.listen(PORT, ()=>{
        console.log("this server now starts at port "+PORT);
    })
})
.catch((err:any) => {
    console.error('unable to connect', err)
});

