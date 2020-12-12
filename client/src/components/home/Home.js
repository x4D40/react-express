import React, {Component} from "react";
import {get, post} from "../../services/ApiService";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // call api with custom header, customer headers arent needed, just an example
        get('/api/numbers/random', {headers: {'X-Test': '123'}})
        .then(res => this.setState({num: res.data.num}))
        .catch(e => console.error(e))

        // check the console for this response
        // note since this route is guarded on the api, it needs auth header
        post('/api/strings/echo/helloworld', {headers: {'Authorization': '123'}})
        .then(res => console.log(res))
        .catch(e => console.error(e))
    }
    
    render() {
        return (
            <div>Random number from API: {this.state.num}</div>
        )
    }
}
