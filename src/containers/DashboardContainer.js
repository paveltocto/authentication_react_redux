import React from 'react'
import {connect} from "react-redux";
import Dashboard from "../components/Dashboard";

function mapStateToProps(state) {
    const {user, status} = state.authentication;
    return {
        user,
        status
    };
}

export default connect(mapStateToProps)(Dashboard);