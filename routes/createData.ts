import express from 'express';
import { Users } from "../server";
export const createDataRouter = express.Router();

createDataRouter.post('/createUser', async (req , res) => {
    let user = req.body;
    Users.create(user);
}
 )