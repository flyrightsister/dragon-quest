import React, { Component } from 'react';
import { connect } from 'react-redux';
import HumanCard from './Components/human_card';

class Human extends Component {
  constructor(props) {
    super(props);
      this.state = {
        human: {
          level: 1,
          currenthp: 10,
          maxhp: 10,
          strength: 5,
          defense: 5
        }
      }
  };

  levelUpHuman() {
    const newHuman = {
      level: this.state.human.level + 1,
      currenthp: this.state.human.currenthp + (this.state.human.currenthp * .10),
      maxhp: this.state.human.maxhp + (this.state.human.maxhp * .10),
      strength: this.state.human.strength + (this.state.human.strength * .15),
      defense: this.state.human.defense + (this.state.human.strength * .15),
    }
    this.setState({
      human: newHuman,
    })
  }

  render() {
    return (
      <div>
        <HumanCard
          level={this.state.level}
          currenthp={this.state.currenthp}
          maxhp={this.state.maxhp}
          strength={this.state.strength}
          defense={this.state.defense}
        />
      </div>
    )
  }
}
