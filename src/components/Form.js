import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Form.css';

export default class Form extends Component {
  render() {
    const {
      cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <div className="form-input">
        <label htmlFor="name-input">
          <input
            name="name-input"
            id="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          <textarea
            name="description-input"
            id="description-input"
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          <input
            name="attr1-input"
            id="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          <input
            name="attr2-input"
            id="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          <input
            name="attr3-input"
            id="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          <input
            name="image-input"
            id="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          <select
            name="rare-input"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <input
          name="trunfo-input"
          id="trunfo-input"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
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
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  isSaveButtonDisabled: PropTypes.bool,
}.isRequired;
