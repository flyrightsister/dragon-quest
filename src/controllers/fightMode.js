import React, { Component } from 'react';
import { connect } from 'react-redux';
import DragonCard from './dragon_card';
import Human from '../Components/human_card';

class Fight extends Component {
  
  render() {
    return (
      <div className="fight-container">
        <DragonCard
          type={this.props.type}
          level={this.props.level}
          currenthp={this.props.currenthp}
          maxhp={this.props.maxhp}
          strength={this.props.strength}
          defense={this.props.defense}
        />
        <Human />
      </div>
    )
  }
}

function mapStateToProps({ fightingDragon }) {
  return { fightingDragon };
}

export default connect(mapStateToProps)(Fight);
