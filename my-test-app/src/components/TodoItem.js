import React from "react";

class TodoItem extends React.Component {
    render() {
        return(
            <div>
                <li key={this.props.todo.id}>
                <input type={checkbox}/>
                {this.props.todo.title}
                </li>

            </div>
        ) 
    }
}

export default TodoItem