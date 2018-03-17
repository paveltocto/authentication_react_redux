import React from 'react'
import {connect} from "react-redux";
import Home from "../components/Home";

function mapStateToProps(state) {
    const {user, status} = state.authentication;
    return {
        user,
        status
    };
}

export default connect(mapStateToProps)(Home);