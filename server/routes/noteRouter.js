const express = require('express')
const serverRouter = express.Router();

const noteController = require('../controllers/noteController');

serverRouter.post('/', noteController.addNote)
serverRouter.get('/:id', noteController.getNote);
serverRouter.get('/', noteController.getNotes);
serverRouter.put('/:id', noteController.changeNote);
                                                      
module.exports = serverRouter;