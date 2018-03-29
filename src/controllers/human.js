import React, { Component } from 'react';
import { connect } from 'react-redux';
import HumanCard from './Components/human_card';

function Human () {

  return (
    <div>
      <HumanCard
        imageurl={props.imageurl}
        level={props.level}
        currenthp={props.currenthp}
        maxhp={props.maxhp}
        strength={props.strength}
        defense={props.defense}
      />
    </div>
  )
}
