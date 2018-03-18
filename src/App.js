import React, { Component } from 'react';
import './App.css';
import CardCarousel from './Components/card_carousel.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dragon Quest</h1>
        <div className="carousel">
          <CardCarousel />
        </div>
      </div>
    );
  }
}

export default App;
