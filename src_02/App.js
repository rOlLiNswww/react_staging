import React, {Component} from 'react';
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";


class App extends Component {
    //状态在哪里，修改状态的代码也在哪里
    state = {todos:[
        {id:'1',name:'吃饭',done:true},
        {id:'2',name:'睡觉',done:false},
        {id:'3',name:'打游戏',done:false}
        ]}

    addToDo = (todoObj)=>{
        const {todos} = this.state
        const newTodos = [todoObj,...todos]
        this.setState({todos:newTodos})
    }
    //修稿checkbox内容到state
    updateTodo=(id,done)=>{
        const newTodos = this.state.todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }

    deleteTodo=(id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos: newTodos})
    }

    checkAllToDO = (done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{return{...todoObj,done}})
        this.setState({todos: newTodos})
    }

    clearAllDone=()=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.done === false
        })
        this.setState({todos: newTodos})
    }

    render() {
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addToDo ={this.addToDo}/>
                        <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={this.state.todos} checkAllToDo={this.checkAllToDO} clearAllDone={this.clearAllDone}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;