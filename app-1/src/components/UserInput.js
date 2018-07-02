import React, { Component } from 'react';

class UserInput extends Component {
    constructor() {
        super();

        this.state = {
            display: ""
        }
    }

    handleChange(val) {
        this.setState({
            display: val
        });
    }

    render() {
        return(
            <div>
                <input type="text" onChange={ (e) => this.handleChange(e.target.value)}/>
                <p>{this.state.display}</p>
            </div>
        );
    }
}

export default UserInput;