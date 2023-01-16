import React, {Component} from 'react';
import './index.css'
import PubSub from 'pubsub-js'
class Lists extends Component {
    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    componentDidMount(){
        this.token=PubSub.subscribe("hihihi",(msg,stateObj)=>{
           this.setState(stateObj)
        })
    }

    componentWillUnmount() {
       PubSub.unsubscribe(this.token)
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.isFirst? <h2>welcome to git search</h2>:
                        this.state.isLoading? <h2>Loading...</h2>:
                        this.state.err? <h2 style={{color:'red'}}>error</h2>:
                        this.state.users.map((userObj)=>{
                            return(
                                <div key={userObj.id} className="card">
                                    <a rel='noreferrer' href={userObj.html_url} target="_blank">
                                        <img alt='avatar' src={userObj.avatar_url} style={{width: '100px'}}/>
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Lists;