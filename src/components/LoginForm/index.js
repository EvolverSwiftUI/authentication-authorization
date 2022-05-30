import { Component } from "react";

import './index.css'

class LoginForm extends Component {
    state = {
        username: '', 
        password: '',
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

    onSubmitSuccess = () => {
        const {history} = this.props;
        // history.push('/'); it will maintain paths
        history.replace('/'); // it replace previous path
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
            this.onSubmitSuccess()
        }
    }

    render() {
        return(
            <div>
                <form>
                    <div>{this.renderUsernameField}</div>
                    <div>{this.renderPasswordField}</div>
                    <button type="submit" onSubmit={this.submitForm}> Login </button>
                </form>
            </div>
        )
    }
}

export default  LoginForm;