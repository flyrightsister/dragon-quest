import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

export default class ControlledCarousel extends Component {
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

    return (
      <Carousel
        className="carousel-container"
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        >
          <Carousel.Item className="carousel-item">
            <Carousel.Caption>
              <h3>1</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <Carousel.Caption>
              <h3>2</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <Carousel.Caption>
              <h3>3</h3>
              </Carousel.Caption>
            </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <Carousel.Caption>
              <h3>4</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <Carousel.Caption>
              <h3>5</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <Carousel.Caption>
              <h3>6</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <Carousel.Caption>
              <h3>7</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <Carousel.Caption>
              <h3>8</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <Carousel.Caption>
              <h3>9</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <Carousel.Caption>
              <h3>10</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        );
      }
}
