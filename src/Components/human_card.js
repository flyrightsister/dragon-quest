import React from 'react';

const HumanCard = (props) => {
  return (
    <div className="human-card">
      <img className="human-card-image" src={props.imageUrl} />
      <h4>Human</h4>
      <p>Level: {props.level}</p>
      <p>HP: {props.currentHP} / {props.maxHP}</p>
      <p>Strength: {props.strength}</p>
      <p>Defense: {props.defense}</p>
    </div>
  )
};

export default HumanCard;
