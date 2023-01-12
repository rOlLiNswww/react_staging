import React, {Component} from 'react';
import './App.css'
import Search from "./Search";
import Lists from "./Lists";

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Search/>
                    <Lists/>
                </div>
            </div>
        );
    }
}

export default App;