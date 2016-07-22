import React from 'react';

export default class List extends React.Component {
  state = {
    cards: [],
    newCardName: ''
  }

  addNewCard = event => {
    this.setState({
      cards: [...this.state.cards, this.state.newCardName],
      newCardName: ''
    })
  }

  changeCardName = event => {
    this.setState({
      newCardName: event.target.value
    })
  }



  render() {
    return (
        <div>
          <input type="text" value={this.state.newCardName} onChange={this.changeCardName}/>
          <button onClick={this.addNewCard}>Add</button>
          <h3>{this.props.name}</h3>
          {this.state.cards.map(card => (<div key={card}>{card}</div>))}
        </div>
    );
  }
}
