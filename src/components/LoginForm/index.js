import { Component } from "react";
import Cookies from "js-cookie";
import {Redirect} from "react-router-dom";

import './index.css'

class LoginForm extends Component {
    state = {
        username: '', 
        password: '',
        showSubmitError: false,
        errorMsg: ''
    }

    onChangeUsername = event => {
        this.setState({username: event.target.value})
    }

    onChangePassword = event => {
        this.setState({password: event.target.value})
    }

    renderPasswordField = () => {
        const {password} = this.state
        return(
            <>
                <label htmlFor="password">
                    PASSWORD
                </label>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                />
            </>
        );
    }

    renderUsernameField = () => {
        const {username} = this.state
        return(
            <div>
                <label>
                    USERNAME
                </label>
                <input 
                    type="text"
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                />
            </div>
        );
    }

    onSubmitSuccess = jwtToken => {
        const {history} = this.props;
        // history.push('/'); it will maintain paths
        history.replace('/'); // it replace previous path
        Cookies.set("jwt_token", jwtToken, {expires: 30})

    }

    onSubmitFailure = errorMsg => {
        console.log(errorMsg);
        this.setState(
            {
                showSubmitError: true,
                errorMsg
            }
        )
    }

    submitForm = async event => {
        event.preventDefault()
        const {username, password} = this.state;
        const userDetails = {username, password};
        const url = "https://apis.ccbp.in/login";
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails),
        }

        const response = await fetch(url, options);
        const data = response.json();
        console.log("login response", data);

        if (response.ok === true) {
            this.onSubmitSuccess(data.jwt_token)
        } else {
            this.onSubmitFailure(data.error_msg)
        }
    }

    render() {
        const{showSubmitError, errorMsg} = this.state;
        const jwtToken = Cookies.get("jwt_token");
        if (jwtToken !== undefined) {
           return <Redirect to="/"/>
        }
        return(
            <div>
                <form>
                    <div>{this.renderUsernameField}</div>
                    <div>{this.renderPasswordField}</div>
                    <button type="submit" onSubmit={this.submitForm}> Login </button>
                    {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                </form>
            </div>
        )
    }
}

export default  LoginForm;