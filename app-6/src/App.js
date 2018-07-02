import React, { Component } from 'react';
import Todo from './components/Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks : ["laundry", "homework", "go on a date"],
      input : ""
    }
  }

  handleInput(val) {
    this.setState({
      input : val
    });
  }

  addTask() {
    let newTask = this.state.tasks.push(this.state.input)
    this.setState({
      tasks : newTask,
      input : ""
    });
    console.log(this.state.tasks);
    
  }

  render() {
    return (
      <div>
        <h1>My to-do list: </h1>
        <input type="text" onChange={ (e) => this.handleInput(e.target.value)}/>
        <button onClick={ () => this.addTask()}>Add</button>
        <Todo array={this.state.tasks} />
      </div>
    );
  }
}

export default App;
