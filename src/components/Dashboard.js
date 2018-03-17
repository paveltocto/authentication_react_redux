import React, {Component} from "react";

class Dashboard extends Component {

    render() {
        let {user} = this.props;
        return (
            <div className="col-md-12">
                <h2>Dashboard</h2>
                <p>Welcome, <strong>{user ? user.email : ''}</strong> you are logged in!</p>
            </div>
        )
    }
}

export default Dashboard;