import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
    getStudentData=()=>{
    axios.get('http://localhost:3000/api1/students').then(
        response => {console.log("success:",response.data)},
        error => {console.log('fail:',error)}
    )
    }

    getCarData=()=>{
        axios.get('http://localhost:3000/api2/cars').then(
            response => {console.log("success",response.data)},
            error => {console.log('fail',error)}
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取student数据</button>
                <button onClick={this.getCarData}>点我获取car数据</button>
            </div>
        );
    }
}

export default App;