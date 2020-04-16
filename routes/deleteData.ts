import express from 'express';
import { Users } from '../server';

export const deleteDataRouter = express.Router();

deleteDataRouter.get('/deleteUser/:id', async (req, res) => {
    await Users.destroy({
        where: {
            id : req.params.id
        }
    })
})