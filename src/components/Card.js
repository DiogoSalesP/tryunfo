import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Card.css';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <p>{cardName}</p>
        <img src={ cardImage } alt={ cardName } />
        <p>{cardDescription}</p>
        <p>{cardAttr1}</p>
        <p>{cardAttr2}</p>
        <p>{cardAttr3}</p>
        <p>{cardRare}</p>
        {cardTrunfo === true ? <p>Super Trunfo</p> : ''}

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardImage: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
