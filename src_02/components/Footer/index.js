import React, {Component} from 'react';
import './index.css'

class Footer extends Component {
    handleCheckAll=(event)=>{
        this.props.checkAllToDo(event.target.checked)
}

    handleClearAllDone=()=>{
        this.props.clearAllDone()
    }

    render() {
        const {todos} = this.props
        const doneCount =todos.reduce((pre,todo)=>(todo.done? pre+1 : pre+0),0);
        const total = todos.length
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !==0}/>
                    </label>
                    <span><span>已完成{doneCount}</span> / 全部{total}</span>
                    <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
                </div>
            </div>
        );
    }
}

export default Footer;