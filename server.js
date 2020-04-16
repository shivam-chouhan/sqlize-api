"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize, DataTypes } = require('sequelize');
const express_1 = __importDefault(require("express"));
const getData_1 = require("./routes/getData");
const createData_1 = require("./routes/createData");
const updateData_1 = require("./routes/updateData");
const deleteData_1 = require("./routes/deleteData");
let pass = 'Shivam123';
let app = express_1.default();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
exports.connection = new Sequelize({
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    username: 'postgres',
    password: pass,
    database: 'sqlize'
});
app.use(express_1.default.json());
app.use('/getData', getData_1.getDataRouter);
app.use('/createData', createData_1.createDataRouter);
app.use('/updateData', updateData_1.updateDataRouter);
app.use('/deleteData', deleteData_1.deleteDataRouter);
const PORT = process.env.PORT || 5000;
exports.Users = exports.connection.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allownull: false
    },
    middleName: DataTypes.STRING,
    lastName: {
        type: DataTypes.STRING,
        allownull: false
    },
    email: {
        type: DataTypes.STRING,
        allownull: false
    },
    phone: {
        type: DataTypes.STRING,
        allownull: false
    },
    address: {
        type: DataTypes.STRING,
        allownull: false
    },
    CustomerId: {
        type: DataTypes.INTEGER,
        allownull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        allownull: false
    }
});
exports.Customers = exports.connection.define('Customers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allownull: false
    },
    website: {
        type: DataTypes.STRING,
        allownull: false
    },
    customerAddress: {
        type: DataTypes.STRING,
        allownull: false
    }
});
exports.roles = exports.connection.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    roleName: {
        type: DataTypes.STRING,
        allownull: false
    }
});
exports.Customers.hasMany(exports.Users);
exports.Users.belongsTo(exports.Customers);
exports.roles.hasMany(exports.Users);
exports.Users.belongsTo(exports.roles);
exports.connection
    .sync({
    logging: console.log
})
    .then(() => {
    console.log('connection to the database established');
    app.listen(PORT, () => {
        console.log("this server now starts at port " + PORT);
    });
})
    .catch((err) => {
    console.error('unable to connect', err);
});
