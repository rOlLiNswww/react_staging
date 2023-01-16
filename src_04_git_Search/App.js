import React, {Component} from 'react';
import './App.css'
import Search from "./Search";
import Lists from "./Lists";

class App extends Component {
    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }
    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Search updateAppState={this.updateAppState}/>
                    <Lists {...this.state}/>
                </div>
            </div>
        );
    }
}

export default App;