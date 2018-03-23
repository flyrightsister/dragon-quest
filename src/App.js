import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardCarousel from './controllers/card_carousel';
import GetRandomDragon from './controllers/get_random_dragon';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomDragonVisible: false,
      dragonCollectionVisible: true,
    }

    this.callDragon = this.callDragon.bind(this);
    this.acceptDragon = this.acceptDragon.bind(this);

  }

  callDragon() {
    this.setState({
      randomDragonVisible: true,
    })
  }

  acceptDragon() {
    this.setState({
      randomDragonVisible: false,
    })
  }

  render() {
    let randomDragon = null;
    if (this.state.randomDragonVisible) {
      randomDragon = (
        <div className="dragon-selection-container">
          <GetRandomDragon
            acceptDragon={this.acceptDragon}
          />
            <div className="dragon-selection-description">
          </div>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Dragon Quest</h1>
        <div className="dragon-collection-description">
          <p>Call a dragon and accept her to add her to your defense squad, or send her away to try for another type! You can only have ten at any given time. Click "fight" on a dragon's card to face off against a human that blunders into the village. Each successive human you face might be a little bit harder. You will level up after a successful battle, or you can merge two dragons for a chance to create a powerful new dragon.</p>
          <button id="dragon-call-btn" className="btn btn-success" onClick={this.callDragon}>
            Call Dragon
          </button>
          <button id="dragon-merge-btn" className="btn btn-info">
            Merge Dragons
          </button>
        </div>
        <div className="carousel">
          <CardCarousel />
        </div>
        {randomDragon}
      </div>
    );
  }
}

const mapStateToProps = ({ fightMode }) => {
  return { fightMode };
};

export default connect(mapStateToProps)(App);
