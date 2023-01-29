import React,{useState} from 'react';
import {Link,Outlet} from 'react-router-dom'

function Message(props) {
    const [messages] = useState([
        {id:'001',title:'massage...',content:"锄禾日当午"},
        {id:'002',title:'massage...',content:"汗滴禾下土"},
        {id:'003',title:'massage...',content:"谁知盘中餐"},
        {id:'004',title:'massage...',content:"粒粒皆辛苦"}
    ])
    return (
        <div>
            <ul>
                {
                    messages.map((m)=>{
                        return(
                                <li key={m.id}>
                                    <Link
                                    to="detail"
                                    state={{
                                        id:m.id,
                                        title:m.title,
                                        content:m.content,
                                    }}
                                    >{m.title}</Link>

                                </li>
                            )
                    })
                }
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );

}

export default Message;