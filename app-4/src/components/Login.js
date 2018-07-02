import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            userName : "",
            password : ""
        }
    }

    handleUserName(val) {
        this.setState({
            userName : val
        });
    }

    handlePassword(val) {
        this.setState({
            password : val
        });
    }

    alertNameAndPass() {
        alert(`Username: ${this.state.userName}, Password: ${this.state.password}`);
    }

    render() {
        return(
            <div>
                <input type="text" onChange={ (e) => this.handleUserName(e.target.value)}/>
                <input type="text" onChange={ (e) => this.handlePassword(e.target.value)}/>
                <button onClick={ () => this.alertNameAndPass()}>Login</button>
            </div>
        );
    }
}

export default Login;