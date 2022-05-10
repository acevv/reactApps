import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4} from "uuid";

class TodoComponent extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title:"Setup development enviorment",
                completed:false
            },
            {
                id:uuidv4(),
                title:"Develop website and add content",
                completed:false
            },
            {
                id:uuidv4(),
                title:"Deploy on server",
                completed:false
            }
        ]
    }
    handleChange = (id) => {
        // console.log("Klik od TODO COMPONENT from: ", id);

        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
            
        })
    }

    deleteItem = (id) => {

        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos: todos});
    }

    inputTodoMethod = (title) => {
        if(!title) {
            alert("Add todo please");
            return
        }
        const todo = {
            id: uuidv4(),
            title: title,
            completed:false
        }
        this.setState({
            todos: [...this.state.todos, todo]
        })
        // console.log(title);
    }

    render() {
        return (  
            <div>
                <Header/>
                <InputTodo vnesiTodo={this.inputTodoMethod}/>
                <TodoList todos={this.state.todos} 
                handleChangeProps={this.handleChange}
                deleteItem={this.deleteItem}/>
                
            </div>
        )
    }
}

export default TodoComponent