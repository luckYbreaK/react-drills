import React, { Component } from 'react';

class NewTask extends Component{
    constructor() {
        super();

        this.state = {
            input : ""
        };
    }

    handleInput(task) {
        this.setState({
            input : task
        });
    }

    render() {
        let taskItem = this.state.input;
        return(
            <div>
                <input type="text" onChange={ (e) => this.handleInput(e.target.value)}/>
                <button onClick={ () => this.props.addTask(taskItem) }>Add</button>
            </div>
        );
    }
}

export default NewTask;