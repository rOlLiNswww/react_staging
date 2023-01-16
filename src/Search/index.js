import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'
class Search extends Component {

    searchUser =()=>{
        const {value} = this.keyWordEle
        PubSub.publish("hihihi",{isFirst:false,isLoading: true})
        axios.get(`/api1/search/users?q=${value}`).then(
            response => {PubSub.publish("hihihi",{isLoading:false,users:response.data.items})},
            error => {PubSub.publish("hihihi",{isLoading:false,err:error.message})}
        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c=>this.keyWordEle = c} type="text" placeholder="enter the name you search"/>&nbsp;
                        <button onClick={this.searchUser}>Search</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Search;