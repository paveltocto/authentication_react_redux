import React, {Component} from 'react'
import {history} from '../helpers'
import {Router} from 'react-router-dom';
import routes from "../routes";
import Header from "./Header";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.verifyAuthenticationUser();
    }

    render() {
        console.log(this.props, 'proror');
        return (
            <Router history={history}>
                <div className="container">
                    <Header/>
                    <div className="jumbotron">
                        {routes}
                    </div>
                </div>
            </Router>
        )
    }
}


export default App;