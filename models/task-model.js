const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    task: { type: String, required: true },
    complete: { type: Boolean, default: false },
    created: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;