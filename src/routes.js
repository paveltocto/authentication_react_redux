import React from 'react'
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import NotFound from "./pages/NotFoundPage";
import {Route, Switch, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('jwt_token')
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    )}/>
);


const PublicRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        !localStorage.getItem('jwt_token')
            ? <Component {...props} />
            : <Redirect to={{pathname: '/dashboard', state: {from: props.location}}}/>
    )}/>
);

export default (

    <Switch>
        <Route exact path='/' component={Home}/>
        <PublicRoute path="/login" component={Login}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateRoute exact path="/logout" component={Dashboard}/>
        <Route path="*" component={NotFound} />
    </Switch>
)