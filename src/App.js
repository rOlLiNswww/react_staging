import React from 'react';
import {NavLink,useRoutes} from 'react-router-dom'
import routes from "./routes";
import Header from "./components/Header";

function App(props) {
    //根据路由表生成对应路由规则
    const element = useRoutes(routes)
    return (
        <div>
            <div className="row">
               <Header/>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 注册路由 */}
                        <NavLink className="list-group-item" to="./about">About</NavLink>
                        <NavLink className="list-group-item" to="./home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 匹配路由  */}
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;