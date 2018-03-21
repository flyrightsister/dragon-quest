import React, { Component} from 'react';
import { connect } from 'react-redux';
import DragonCard from '../Components/dragon_card.js';
import { getRandomDragon, addToUserDragons } from '../actions';

class GetRandomDragon extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    this.props.getRandomDragon(1);
    console.log('componentDidMount is being called in get_random_dragon')
  }

  getNewDragon() {
    // make a new fetch call.
  }


  render() {
    console.log('this.props in random dragon render function', this.props)
    return (
      <div>
        <DragonCard
          type={this.props.randomDragon}
        />
        <button className="accept-dragon" onClick={() => {this.props.addToUserDragons(this.props.randomDragon)}}>Accept This Dragon</button>
        <button className="get-new-dragon" onClick={this.getNewDragon}>Get New Dragon</button>
      </div>
    );
  }
}


function mapStateToProps({ dragons }) {
  return { dragons };
};

export default connect(mapStateToProps, { getRandomDragon })(GetRandomDragon);
