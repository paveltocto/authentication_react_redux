import React, {Component} from 'react';

class NotFoundPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2>{"Page not found"}</h2>
                </div>
            </div>
        )
    }
}

export default NotFoundPage;