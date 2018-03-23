import React, { Component } from 'react';
import { connect } from 'react-redux';
import DragonCard from './dragon_card';
import Human from './human_card';

class Fight extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="fight-container">
        <DragonCard />
        <Human />
      </div>
    )
  }
}

function mapStateToProps({ fightMode }) {
  return { fightMode };
}

export default connect(mapStateToProps)(Fight);
