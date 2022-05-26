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

    render() {
        return(
            <div>
                <form>
                    <div>{<this.renderUsernameField/>}</div>
                    <div>{<this.renderPasswordField/>}</div>
                    <button type="submit"> Login </button>
                </form>
            </div>
        )
    }
}

export default  LoginForm;