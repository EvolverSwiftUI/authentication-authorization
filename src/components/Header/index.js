import { Component } from "react";
import { withRouter } from 'react-router-dom';
import Cookie from 'js-cookie';

import "./index.css"

class Header extends Component {

    onClickLogout = () => {
        const {history} = this.props;
        Cookie.remove("jwt_token");
        history.replace('/login');
    }

    render() {
        return (
            <div>
                <h1> Header Component</h1>
                <button onClick={this.onClickLogout}>
                    Logout
                </button>
            </div>
        );
    }
}

export default withRouter(Header);