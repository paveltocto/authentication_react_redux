import React, {Component} from "react";
import {history} from "../helpers";

import {Field, reduxForm} from 'redux-form';
import renderField from "./renderField";

const validateLogin = values => {
    let errors = {};
    let hasError = false;

    if (!values.email) {
        errors.email = 'Enter email';
        hasError = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
        hasError = true;
    }

    if (!values.password || values.password.trim() === '') {
        errors.password = 'Enter password';
        hasError = true;
    }

    return hasError && errors;

};


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    }



    handleSubmitLogin(values, dispatch) {
        if (values.email && values.password) {
            this.props.userLogin(values.email, values.password);
        }
    }


    renderAuthenticationError() {
        if (this.props.error_message) {
            return <div className="alert alert-danger">{this.props.error_message}</div>;
        }
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;

        return (
            <form name="form" onSubmit={handleSubmit(this.handleSubmitLogin)}>
                <Field name="email" type="text" component={renderField} label="Email"/>
                <Field name="password" type="password" component={renderField} label="Password"/>
                {this.renderAuthenticationError()}
                <div className="form-group">
                    <button disabled={pristine || submitting} className="btn btn-primary">Login</button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'LoginForm', // a unique identifier for this form
    validate: validateLogin
})(LoginForm)
