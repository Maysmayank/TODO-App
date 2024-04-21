import { useState } from "react"

 export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,setdescription]=useState("");

return <div>
        <input id="title" type="text" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}} /><br />
        <input id="desc" type="text " placeholder="description"  onChange={(e)=>{setdescription(e.target.value)}}/><br />

        <button onClick={()=>{
            
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description: description,
                }),

                headers:{
                    "content-type":"application/json"
                }
            })
            .then(async(res)=>{
                let json=await res.json()
                alert("Todo added to DB ")
            })
            .catch(error => {
                console.error('Error adding todo:', error);
                alert("Failed to add todo");
            });
        }} >Add Todo</button>
    </div>


}

