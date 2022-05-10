import React from "react";

function TodoItem(props) {
    return <li>
        <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps(props.todo.id)}/>
        {props.todo.title}
        <button onClick={() => props.deleteItemProps(props.todo.id)}><img src="bin.png" width={11} height={11} alt="bin-slika"/></button>
        </li> 
}

export default TodoItem