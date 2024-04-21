const express=require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
    res.json("homepage")
})

app.post("/todo",async(req,res)=>{
    let createpayload=req.body;
    let parsepayload=createTodo.safeParse(createpayload);
    if(!parsepayload.success){
        res.status(411).json({
            message:"You've sent the wrong input"
        })
    }
    
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false
    })
    res.json({
        message:"todo created"
    })
})
app.get("/todos",async(req,res)=>{
    let todos=await todo.find();
    res.json({
        todos
    })

})
app.put("/completed",async(req,res)=>{
    let updatepayload=req.body;
    let parsepayload= updateTodo.safeParse(updatepayload);
    if(!parsepayload.success){
        res.status(411).json({
            message:"You've sent the wrong input"
        })
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true,
    })
    res.json({
        message:"update done"
    })
})


app.listen(3000,()=>{
    console.log("started");
});