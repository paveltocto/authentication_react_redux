import LoginForm from "../components/LoginForm";
import {connect} from "react-redux";
import {userLogin} from '../actions/users'


function mapStateToProps(state) {
    const {user, status, error_message} = state.authentication;
    return {
        user,
        status,
        error_message
    };
}

export default connect(mapStateToProps, {userLogin})(LoginForm);