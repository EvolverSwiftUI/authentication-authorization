
import { Component } from "react";
// import Cookie from 'js-cookie';
// import {Redirect} from "react-router-dom";


import "./index.css"

class Home extends Component {

    render() {
        // const jwtToken = Cookie.get("jwt_token");
        // if (jwtToken === undefined) {
        //     return <Redirect to='/login' />
        // }
        return(
            <div>
                <h1> Home Component </h1>
            </div>
        );
    }
}

export default Home;