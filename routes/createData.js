"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("../server");
exports.createDataRouter = express_1.default.Router();
exports.createDataRouter.post('/createUser', async (req, res) => {
    let user = req.body;
    server_1.Users.create(user);
});
