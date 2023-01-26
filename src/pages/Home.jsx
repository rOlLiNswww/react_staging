import React from 'react';
import {NavLink,Outlet} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li>
                    <NavLink className="list-group-item" to="News">News</NavLink>
                </li>
                <li>
                    <NavLink className="list-group-item" to="Message">Message</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
}

export default Home;