import express from 'express';
import { Users, Customers , roles} from '../server.js'

export let getDataRouter = express.Router();

getDataRouter.get('/getUsers' , async (req, res) => {
   let users = await  Users.findAll({
       include:[{ model: Customers}, { model : roles}],
       order : [
           ['id','ASC']
       ]
   })
   res.json(users);
})

getDataRouter.get('/getCustomers' , async (req, res) => {
    let customers = await Customers.findAll({
        order : [
            ['id', 'ASC']
        ]
    })
    res.json(customers)
})

getDataRouter.get('/getRoles', async (req, res) => {
    let Roles = await roles.findAll()
    res.json(Roles)
})