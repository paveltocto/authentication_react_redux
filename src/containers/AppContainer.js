import React from 'react'
import {connect} from "react-redux";
import App from "../components/App";


function mapStateToProps(state) {
    const {user, status} = state.authentication;
    return {
        user,
        status
    };
}

export default connect(mapStateToProps)(App);