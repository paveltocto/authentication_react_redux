import React, {Component} from 'react';
import HomeContainerContainer from "../containers/HomeContainer";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <HomeContainerContainer/>
                </div>
            </div>
        )
    }
}

export default HomePage;