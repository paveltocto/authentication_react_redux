import React from 'react'
import {connect} from "react-redux";
import App from "../components/App";
import {verifyAuthenticationUser} from   "../actions/users"


function mapStateToProps(state) {
    const {user ,status} = state.authentication;
    return {
        user,
        status
    };
}

export default connect(mapStateToProps, {verifyAuthenticationUser})(App);