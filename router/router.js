const express = require('express');
const router = express.Router();

const { getItems, addItem, deleteItem, completeTask } = require('./../handlers/handlers');

router.get('/getitems', getItems);
router.post('/additem', addItem);
router.delete('/delteitem/:id', deleteItem);
router.patch('/completetask/:id', completeTask )

module.exports = router;