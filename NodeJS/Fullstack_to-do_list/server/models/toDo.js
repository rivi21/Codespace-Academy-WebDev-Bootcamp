const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator")
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required:[true, "Title is required"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model("toDo", toDoSchema);