import React, { Component} from 'react';
import { connect } from 'react-redux';
import DragonCard from '../controllers/dragon_card.js';
import { getRandomDragon } from '../actions';
import { addToUserDragons } from '../actions';
import './get_random_dragon.css';

class GetRandomDragon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomMode: true,
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
    this.props.acceptDragon();
  }


  render() {
    console.log('randomDragon props', this.props.randomDragon);
    return (
      <div>
        <DragonCard
          randomMode={this.state.randomMode}
          imageUrl={this.props.randomDragon.imageurl}
          type={this.props.randomDragon.type}
          level={this.props.randomDragon.level}
          currentHP={this.props.randomDragon.currenthp}
          maxHP={this.props.randomDragon.maxhp}
          strength={this.props.randomDragon.strength}
          defense={this.props.randomDragon.defense}
        />
        <div className="random-dragon-choices">
          <button className="accept-dragon-btn btn btn-success" onClick={this.addDragonToCollection}>Accept This Dragon</button>
          <button className="get-new-dragon-btn btn btn-danger" onClick={this.getNewDragon}>Get New Dragon</button>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ dragons, randomDragon }) {
  return { dragons, randomDragon };
};

export default connect(mapStateToProps, { getRandomDragon, addToUserDragons })(GetRandomDragon);
