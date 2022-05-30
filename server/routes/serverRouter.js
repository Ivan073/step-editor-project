const express = require('express')
const serverRouter = express.Router();

const db = require("../models/index.js");

serverRouter.get('/', (req, res)=>{
    db.accounts.findAll({raw:true}).then(accounts=>{
        console.log(accounts);
        res.send(accounts);
    }).catch(err=>console.log(err));

    db.notes.findAll({raw:true}).then(notes=>{
        console.log(notes);
        //res.send(notes);
    }).catch(err=>console.log(err));
});
                                                      
module.exports = serverRouter;