const express = require('express')
const serverRouter = express.Router();

const accountController = require('../controllers/accountController');

serverRouter.put('/', accountController.addAccount)
serverRouter.post('/', accountController.login)
serverRouter.get('/:login', accountController.getAccount);
                                                      
module.exports = serverRouter;