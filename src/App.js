import React, { Component } from 'react';
import './App.css';
import CardCarousel from './controllers/card_carousel';
import GetRandomDragon from './controllers/get_random_dragon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dragon Quest</h1>
        <div className="dragon-collection-description">
          <h4>
            This is your dragon collection.
          </h4>
          <p>Each dragon you accept above will be added to your defense squad. But be careful! You can only have ten at any given time. Click "fight" on a dragon's card to face off against a human that blunders into the village. Each successive human you face will be a little bit harder. You will level up after a successful battle, or you can merge two dragons for a chance to create a powerful new dragon.</p>
        </div>
        <div className="carousel">
          <CardCarousel />
        </div>
        <div className="dragon-selection-description">
          <h4>Get a new dragon here.</h4>
          <p></p>
        </div>
        <div className="dragon-selection-container">
          <GetRandomDragon />
        </div>
      </div>
    );
  }
}

export default App;
