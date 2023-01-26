import {Navigate} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Message from '../pages/Message'
import News from "../pages/News";

//路由表
export default [
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/home',
        element:<Home/>,
        children:[
        {
            path:'News',
            element:<News/>
        },
        {
            path:'Message',
            element:<Message/>
        }
        ]
    },
    {
        path:'/',
        element:<Navigate to="/home"/>
    }
]