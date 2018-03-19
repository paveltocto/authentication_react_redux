import LoginForm from "../components/LoginForm";
import {connect} from "react-redux";
import {signIn} from '../actions/users'


function mapStateToProps(state) {
    const {user, status, errorAuthentication} = state.authentication;
    return {
        user,
        status,
        errorAuthentication
    };
}

export default connect(mapStateToProps, {signIn})(LoginForm);