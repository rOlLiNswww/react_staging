import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {

    searchUser =()=>{
        const {value} = this.keyWordEle
        this.props.updateAppState({isFirst:false,isLoading: true})
        axios.get(`/api1/search/users234?q=${value}`).then(
            response => this.props.updateAppState({isLoading:false,users:response.data.items}),
            error => {this.props.updateAppState({isLoading:false,err:error.message})}
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