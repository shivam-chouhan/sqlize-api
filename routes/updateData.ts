import  express  from "express";
import { Users } from "../server";

export const updateDataRouter = express.Router();

updateDataRouter.post('/updateUser/:id', async (req, res) => {
    let user = req.body;
    await Users.update({firstName: user.firstName,
         middleName: user.middleName,
         lastName :user.lastName,
         CustomerId: parseInt(user.customerId),
         email: user.email,
         phone: user.phone,
         roleId: parseInt(user.roleId),
         address: user.address   } , {
        where :{
            id: req.params.id
        }
    })
    res.status(200)
})