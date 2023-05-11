import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Form.css';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <div className="form-input">
        <label htmlFor="cardName">
          <input
            name="cardName"
            id="cardName"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            placeholder="Name"
          />
        </label>
        <label htmlFor="cardDescription">
          <textarea
            name="cardDescription"
            id="cardDescription"
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
            placeholder="Description"

          />
        </label>
        <label htmlFor="cardAttr1">
          <input
            name="cardAttr1"
            id="cardAttr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            placeholder="Attr-1"
          />
        </label>
        <label htmlFor="cardAttr2">
          <input
            name="cardAttr2"
            id="cardAttr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            placeholder="Attr-2"
          />
        </label>
        <label htmlFor="cardAttr3">
          <input
            name="cardAttr3"
            id="cardAttr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            placeholder="Attr-3"
          />
        </label>
        <label htmlFor="cardImage">
          <input
            name="cardImage"
            id="cardImage"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            placeholder="Image"
          />
        </label>
        <label htmlFor="cardRare">
          <select
            name="cardRare"
            id="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <input
          id="cardTrunfo"
          name="cardTrunfo"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          type="submit"
          disabled={ !isSaveButtonDisabled() }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  onInputChange: PropTypes.func,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
}.isRequired;
