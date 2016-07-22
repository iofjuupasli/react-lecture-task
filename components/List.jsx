import React from 'react';
import Card from './Card';


export default class List extends React.Component {
  state = {
    cardText: ''
  }

  onCardTextChange = (event) => {
    this.setState({
      cardText: event.target.value
    })
  }

  render() {

    const cards = this.props.cards.map(card => (
      <li>
        <Card
          text={ card }
          listName={ this.props.name }
          onRemoveCard={this.props.onRemoveCard}
          onEditCard={this.props.onEditCard}/>
      </li>
    ))

    return (
      <div>
        <ul className="list" onDrop={(event) => { console.log(event.target, 'drop') }}>
          <span>{ this.props.name }</span>
          { cards }
        </ul>
        <input
          onChange={ this.onCardTextChange }
          value={this.state.cardText}/>
        <button onClick={() => {
              this.props.onAddCard(
                this.props.name,
                his.state.cardText
              )
        }}>
            Add card
        </button>
        <button onClick={() => { this.props.onRemoveList(this.props.name) }}>RemoveList</button>
      </div>
    )
  }
}
