import React from 'react';

const Card = (props) => (
  <div className="card">
    <p contentEditable={true} onInput={ (event) => { props.onEditCard(event.target.innerText, props.listName, props.text) } }>{ props.text }</p>
    <button onClick={ () => {props.onRemoveCard(props.listName, props.text)} }>Remove</button>
  </div>
)

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
    return (
      <div>
        <ul className="list">
          <span>{ this.props.name }</span>
          { this.props.cards.map(card => (
            <li><Card text={ card }
            listName={ this.props.name }
            onRemoveCard={this.props.onRemoveCard}
            onEditCard={this.props.onEditCard}/></li>
          )) }
        </ul>
        <input onChange={ this.onCardTextChange } value={this.state.cardText}/>
        <button onClick={() => { this.props.onAddCard(this.props.name, this.state.cardText)}}>Add card</button>
        <button onClick={() => { this.props.onRemoveList(this.props.name) }}>RemoveList</button>
      </div>
    )
  }
}
