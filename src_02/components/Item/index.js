import React, {Component} from 'react';
import './index.css'
import * as events from "events";

class Item extends Component {

    state = {mouse:false}
    handleMouse = (flag)=>{
        return()=>{
            this.setState({mouse:flag})
        }
    }

    handleCheck=(id)=>{
        return(event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    handleDelete =(id)=>{
        if(window.confirm('delete?')){
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id,name,done} = this.props
        return (
            <div>
                <li style={{backgroundColor:this.state.mouse ? '#ffffff66':'transparent'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:this.state.mouse? 'block':'none'}}>删除</button>
                </li>
            </div>
        );
    }
}

export default Item;