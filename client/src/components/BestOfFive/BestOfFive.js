import React from 'react';
import TourneyPlayerName from '../TourneyPlayerName';
import './BestOfFive.css';

const BestOfFive = props =>

  <div className="b5-background">
    <div className="b5-header">
      <h2>Best of {props.bestOf} Tournament</h2>
    </div>
    <div className="b5-main">
      <TourneyPlayerName player={props.player1} score={props.player1wins} faction={props.player1faction} />
      <TourneyPlayerName player={props.player2} score={props.player2wins} faction={props.player2faction} />
    </div>
  </div>

export default BestOfFive;