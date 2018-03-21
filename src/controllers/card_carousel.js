import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/lib/Carousel';
import DragonCard from '../Components/dragon_card.js';
import { addToUserDragons } from '../actions/index';

class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }


  render() {
    const { index, direction } = this.state;
    let dragonList = null;

    if (this.props.dragons.length > 0) {
      dragonList = (
        <Carousel
          className="carousel-container"
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          >
            {this.props.dragons.map((dragon) => {
              return (
              <Carousel.Item
                key={dragon.id}
                className="carousel-item">
                <DragonCard
                  imageUrl={dragon.imageUrl}
                  type={dragon.type}
                  level={dragon.level}
                  currentHP={dragon.currentHP}
                  maxHP={dragon.maxHP}
                  strength={dragon.strength}
                  defense={dragon.defense}
                />
                <Carousel.Caption>
                  <h3>{dragon.type}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )})}
          </Carousel>
      )
    } else {
      dragonList = (
        <div>
          <h4>No dragons here!</h4>
        </div>
      )
    }

    return (
      <div>
        {dragonList}
      </div>
        );
      }
}

function mapStateToProps({ dragons }) {
  return { dragons };
};

export default connect(mapStateToProps, { addToUserDragons })(ControlledCarousel);
