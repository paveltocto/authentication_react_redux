import React, {Component} from 'react'
import {history} from '../helpers'
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import Header from "./Header";
import NotFound from "../pages/NotFoundPage";
import Login from "../pages/LoginPage";
import Home from "../pages/HomePage";
import Dashboard from "../pages/DashboardPage";


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('uid_authentication')
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    )}/>
);


const PublicRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        !localStorage.getItem('uid_authentication')
            ? <Component {...props} />
            : <Redirect to={{pathname: '/dashboard', state: {from: props.location}}}/>
    )}/>
);

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <div className="container">
                    <Header/>
                    <div className="jumbotron">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <PublicRoute exact path="/login" component={Login}/>
                            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                            <PrivateRoute exact path="/logout" component={Dashboard}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}


export default App;