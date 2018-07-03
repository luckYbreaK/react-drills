import React, { Component } from 'react';
import NewTask from './components/NewTask';
import List from './components/List';
import Todo from './components/Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks : ["laudry", "homework"],
      newTasks : []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    let newArr = this.state.newTasks;
    newArr.push(task);
    this.setState({
      newTasks: newArr
    }); 
  }

  render() {
    return (
      <div>
        <h1>My to-do list:</h1>
        <NewTask addTask={this.handleAddTask}/>
        <List array={this.state.tasks}/>
        <Todo array={this.state.newTasks}/>
      </div>
    );
  }
}

export default App;
