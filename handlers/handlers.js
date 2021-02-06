const Task = require('../models/task-model');

async function getItems (req, res){

    try {

        const result = await Task.find();
        res.status(200).json({message: "success", data: result});

    } catch (error) {

        console.log("Error in fetching items: ", error.message);
        res.status(500).send("Error in fetching items");

    }

}

async function addItem(req, res){

    const newItem = new Task({
        task: req.body.task
    });

    try {

        const result = await newItem.save();
        res.status(200).json({data:newItem})
        console.log("New Item Created ", result);

    } catch (error) {
        
        console.log(`Error in creating item: `, error.message );
        res.status(404).send("Error in creating item: ", error.message );

    }

}

async function deleteItem(req, res){

    const taskID = req.params.id;

    try {

        const result = await Task.findByIdAndDelete(taskID);
        res.status(200).json({message: "success", data: result});

        console.log("Deleted Task ", result);

    } catch (error) {
        
        console.log(`Error in deleting item: `, error.message );
        res.status(500).send("Error in deleting item: ", error.message );

    }

}

async function completeTask(req, res){

    const taskID = req.params.id;

    try {

        const result = await Task.findById(taskID);

        result.complete = !result.complete;
        result.save();

        res.status(200).json({message: "success", data: result });

        console.log("Updated Success status of:", result );

    } catch (error) {

        console.log("Error in updating success check, ", error.message);

    }

}

module.exports = { getItems, addItem, deleteItem, completeTask }