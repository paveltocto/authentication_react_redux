import React, {Component} from 'react'
import {Link} from "react-router-dom";
import NavLink from "./NavLink";
import {connect} from "react-redux";
import {signOut} from "../actions/users"
import {STATUS_LOGIN_SUCCESS} from "../constants/users"

class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleSignOut() {
        this.props.signOut();
    }

    renderLinksRight() {
        const {status} = this.props;

        if (status === STATUS_LOGIN_SUCCESS) {
            return (
                <React.Fragment>
                    <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                    <li className="nav-item">
                        <a href="javascript:void(0)" className="nav-link" onClick={() => this.handleSignOut()}>Sign
                            Out</a>
                    </li>
                </React.Fragment>
            )
        } else {
            return (<NavLink className="nav-link" to="/login">Login</NavLink>);
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <Link className="navbar-brand" to="/">Project name</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <NavLink to="/">Home</NavLink>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {this.renderLinksRight()}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    const {user, status} = state.authentication;
    return {
        user,
        status
    };
}

export default connect(mapStateToProps, {signOut})(Header);