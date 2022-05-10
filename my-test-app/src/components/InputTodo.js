import React from "react";
import { useState } from "react";


function InputTodo({vnesiTodo}) {

    const [title, setTitle] = useState("");
    const updateTitle = (event) => { setTitle(event.target.value) };

    return(
        <div>    
    
            <input type="text" value={title} onChange={updateTitle} placeholder="Enter todo"/>
            <button onClick={() => vnesiTodo(title)}>Add</button>
        </div>
        
    )
}

export default InputTodo
