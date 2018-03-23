import React, { Component } from 'react';

export default class DragonCard extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    let card = null;
    if (this.props.randomMode) {
      card = (
        <div className="dragon-card-container">
          <img className="dragon-card-image" src={this.props.imageUrl} alt="dragon" />
          <h4>{this.props.type}</h4>
          <p>Level: {this.props.level}</p>
          <p>HP: {this.props.currentHP} / {this.props.maxHP}</p>
          <p>Strength: {this.props.strength}</p>
          <p>Defense: {this.props.defense}</p>
        </div>
      )
    } else {
      card = (
        <div className="dragon-card-container">
          <img className="dragon-card-image" src={this.props.imageUrl} alt="dragon" />
          <h4>{this.props.type}</h4>
          <p>Level: {this.props.level}</p>
          <p>HP: {this.props.currentHP} / {this.props.maxHP}</p>
          <p>Strength: {this.props.strength}</p>
          <p>Defense: {this.props.defense}</p>
          <button className="fight-btn btn btn-primary">Fight</button>
        </div>
      )
    }
    return (
      <div>
        {card}
      </div>
    );
  }
}