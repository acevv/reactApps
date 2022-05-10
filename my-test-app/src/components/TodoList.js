import React from "react";
// import TodoItem from "./TodoItem";
import TodoItem from "./TodoItemFunction";


class TodoList extends React.Component {
    render() {
        return (
            
                <ul>
                    {this.props.todos.map(todo => 
                    // <TodoItem key = {todo.id} todo = {todo}/>  // TodoItemClass
                    <TodoItem key={todo.id} todo={todo} 
                    handleChangeProps={this.props.handleChangeProps} 
                    deleteItemProps={this.props.deleteItem}/>
                    )} 
                </ul>
            
        )
    }
}

export default TodoList