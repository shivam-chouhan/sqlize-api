"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_js_1 = require("../server.js");
exports.getDataRouter = express_1.default.Router();
exports.getDataRouter.get('/getUsers', async (req, res) => {
    let users = await server_js_1.Users.findAll({
        include: [{ model: server_js_1.Customers }, { model: server_js_1.roles }],
        order: [
            ['id', 'ASC']
        ]
    });
    res.json(users);
});
exports.getDataRouter.get('/getCustomers', async (req, res) => {
    let customers = await server_js_1.Customers.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
    res.json(customers);
});
exports.getDataRouter.get('/getRoles', async (req, res) => {
    let Roles = await server_js_1.roles.findAll();
    res.json(Roles);
});
