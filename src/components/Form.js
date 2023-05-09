import React, { Component } from 'react';
import '../style/Form.css';

export default class Form extends Component {
  render() {
    return (
      <div className="form-input">
        <label htmlFor="name-input">
          <input data-testid="name-input" type="text" />
        </label>
        <label htmlFor="description-input">
          <textarea data-testid="description-input" type="textarea" />
        </label>
        <label htmlFor="arrt1-input">
          <input data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="arrt2-input">
          <input data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="arrt3-input">
          <input data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="image-input">
          <input data-testid="image-input" type="text" />
        </label>
        <label htmlFor="rare-input">
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <input data-testid="trunfo-input" type="checkbox" />
        <button data-testid="save-button" type="submit">Salvar</button>
      </div>
    );
  }
}
