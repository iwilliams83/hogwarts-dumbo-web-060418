import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog'
import Container from './Container'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />

          <Container />

      </div>
    )
  }
}

export default App;
