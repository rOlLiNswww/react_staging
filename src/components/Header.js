import React, {forwardRef} from 'react';
import {useNavigate} from 'react-router-dom'

function Header(props) {
    const navigate = useNavigate()
    function back(){
        navigate(-1)
    }
    function forward(){
        navigate(+1)
    }
    return (
        <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
        <h2>React Router Demo</h2>
            <button onClick={back}>back</button>
            <button onClick={forward}>forward</button>
        </div>

        </div>
    );
}

export default Header;