import React from 'react'
import Hello from "./hello/hello";
import Welcome from "./welcome/welcome";
class App extends React.Component{
    render() {
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

export default App