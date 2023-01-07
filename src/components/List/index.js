import React, {Component} from 'react';
import Item from "../Item";
import './index.css'

class List extends Component {
    render() {
        const {todos} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map((todo)=>{
                            return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;