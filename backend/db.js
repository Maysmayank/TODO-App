const mongoose=require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb://127.0.0.1:27017/todos")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
});

const todo=mongoose.model("todos",todoSchema);
module.exports={todo};
