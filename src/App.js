import React, { Component } from 'react';
import './App.css';
import CardCarousel from './controllers/card_carousel';
import GetRandomDragon from './controllers/get_random_dragon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dragon Quest</h1>
        <div className="dragon-selection-container">
          <GetRandomDragon />
        </div>
        <div className="carousel">
          <CardCarousel />
        </div>
      </div>
    );
  }
}

export default App;
