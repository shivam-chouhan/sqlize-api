"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("../server");
exports.updateDataRouter = express_1.default.Router();
exports.updateDataRouter.post('/updateUser/:id', async (req, res) => {
    let user = req.body;
    await server_1.Users.update({ firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        CustomerId: parseInt(user.customerId),
        email: user.email,
        phone: user.phone,
        roleId: parseInt(user.roleId),
        address: user.address }, {
        where: {
            id: req.params.id
        }
    });
    res.status(200);
});
