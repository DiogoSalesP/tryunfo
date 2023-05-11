import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    };
  }

  isAttrValid = () => {
    const maxValue = 210;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attrLessThan210 = (parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)) <= maxValue;
    return attrLessThan210;
  };

  isAttr123Valid = () => {
    const maxIndividualValue = 90;
    const minIndividualValue = 0;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attr123LessThan90 = parseInt(cardAttr1, 10) <= maxIndividualValue
    && parseInt(cardAttr2, 10) <= maxIndividualValue
    && parseInt(cardAttr3, 10) <= maxIndividualValue;
    const attr123GreateThanZero = parseInt(cardAttr1, 10) >= minIndividualValue
    && parseInt(cardAttr2, 10)
    >= minIndividualValue && parseInt(cardAttr3, 10) >= minIndividualValue;
    return attr123LessThan90 && attr123GreateThanZero;
  };

  isSaveButtonDisabled = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const isNameValid = cardName.length > 0;
    const isDescriptionValid = cardDescription.length > 0;
    const isImageValid = cardImage.length > 0;
    const isRareValid = cardRare.length > 0;
    return isNameValid && isDescriptionValid && isImageValid && isRareValid
    && this.isAttrValid() && this.isAttr123Valid();
  }

  onInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: newValue,
    });
  };

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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
