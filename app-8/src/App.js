import React, { Component } from 'react';
import axios from 'axios';

let baseUrl = "https://swapi.co/api/";

class App extends Component {
  constructor() {
    super();

    this.state = {
      people : {}
    }
  }

  componentDidMount() {
    let promise = axios.get(baseUrl + "/people/");
    promise.then( (response) => {
      console.log(response);
    });
    
    
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default App;
