import React, { Component } from 'react';

export default class DragonCard extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }


  render() {
    return (
      <div className="dragon-card-container">
        <img src={this.props.imageUrl} alt="dragon" />
        <h4>{this.props.type}</h4>
        <p>Level: {this.props.level}</p>
        <p>HP: {this.props.currentHP} / {this.props.maxHP}</p>
        <p>Strength: {this.props.strength}</p>
        <p>Defense: {this.props.defense}</p>
        <button className="fight-btn">Fight</button>
      </div>
    );
  }
}
