import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import './index.css'
class Header extends Component {

    handleKeyUp = (event)=>{
        if(event.keyCode !== 13) return
        if(event.target.value.trim() ===''){
            alert("输入值不能为空")
            return;
        }
        const todoObj = {id:nanoid(),name:event.target.value,done:false}
        this.props.addToDo(todoObj)
        event.target.value=""
    }

    render() {
        return (
            <div>
                <div className="todo-header">
                    <input  onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
            </div>
        );
    }
}

export default Header;