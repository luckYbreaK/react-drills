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
    let promise = axios.get(baseUrl + "people/1/");
    promise.then( (response) => {
      this.setState({
        people : response.data
      });
    });
    
    
  }

  render() {
    let { name, height, mass, hair_color, birth_year } = this.state.people
    return (
      <div>
        <p>Character Name: { name }</p>
        <p>Birth Year: { birth_year }</p>
        <p>Height: { height}</p>
        <p>Mass: { mass }</p>
        <p>Hair Color: { hair_color }</p>
      </div>
    );
  }
}

export default App;
