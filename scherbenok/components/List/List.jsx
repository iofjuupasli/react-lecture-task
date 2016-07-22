import React from 'react'
import Card from '../Card/Card'
import Form from '../Form/Form'

export default class List extends React.Component {
  state = {
    cards: []
  }

  createNewCard = cardName => {
    this.setState({
      cards: [...this.state.cards, cardName]
    })
  }

  render() {
      return (
          <div>
            <h4>{this.props.name}</h4>
            <Form onClick={this.createNewCard} />
            { this.state.cards.map(elem => (<Card content={elem} />)) }
          </div>
      );
  }
};
