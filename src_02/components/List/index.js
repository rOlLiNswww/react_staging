import React, {Component} from 'react';
import Item from "../Item";
import './index.css'
import PropTypes from "prop-types";


class List extends Component {

    static propTypes={
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map((todo)=>{
                            return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done} updateTodo={updateTodo}
                            deleteTodo={deleteTodo}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;