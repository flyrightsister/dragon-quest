import React, { Component} from 'react';
import { connect } from 'react-redux';
import DragonCard from '../Components/dragon_card.js';
import { getRandomDragon } from '../actions';
import { addToUserDragons } from '../actions';

class GetRandomDragon extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.getNewDragon = this.getNewDragon.bind(this);
    this.addDragonToCollection = this.addDragonToCollection.bind(this);
  }

  componentDidMount() {
    this.props.getRandomDragon(1);
    console.log('componentDidMount is being called in get_random_dragon')
  }

  getNewDragon() {
    this.props.getRandomDragon(1);
  }

  addDragonToCollection() {
    this.props.addToUserDragons(this.props.randomDragon)
    this.props.getRandomDragon(1);
  }


  render() {
    return (
      <div>
        <DragonCard
          type={this.props.randomDragon.type}
          level={this.props.randomDragon.level}
          currentHP={this.props.randomDragon.currenthp}
          maxHP={this.props.randomDragon.maxhp}
          strength={this.props.randomDragon.strength}
          defense={this.props.randomDragon.defense}
        />
        <button className="accept-dragon" onClick={this.addDragonToCollection}>Accept This Dragon</button>
        <button className="get-new-dragon" onClick={this.getNewDragon}>Get New Dragon</button>
      </div>
    );
  }
}


function mapStateToProps({ dragons, randomDragon }) {
  return { dragons, randomDragon };
};

export default connect(mapStateToProps, { getRandomDragon, addToUserDragons })(GetRandomDragon);
