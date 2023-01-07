import React, {Component} from 'react';
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";


class App extends Component {

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

    render() {
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addToDo ={this.addToDo}/>
                        <List todos={this.state.todos}/>
                        <Footer/>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;