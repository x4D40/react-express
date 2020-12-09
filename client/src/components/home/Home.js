import React, {Component} from "react";
import {get} from "../../services/ApiService";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        get('/api/number/random', {'X-Test': '123'})
        .then(res => this.setState({num: res.data.num}))
    }
    
    render() {
        return (
            <div>Random number from API: {this.state.num}</div>
        )
    }
}
