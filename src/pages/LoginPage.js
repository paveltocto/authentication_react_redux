import React, {Component} from 'react'
import LoginFormContainer from '../containers/LoginFormContainer'

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <LoginFormContainer/>
                </div>
            </div>)
    }
}

export default LoginPage;