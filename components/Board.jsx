import React from 'react';
import NewListForm from './NewListForm';
import List from './List';

function insertCard(lists, listName, cardName) {
  return lists.map((l)=> {
    if (l.name === listName) {
      return { ...l, cards: l.cards.concat(cardName)};
    }
    return l;
  });
}

export default class Board extends React.Component {
  state = {
    lists: [],
  }

  onNewList = listName => {
    this.setState({
      lists: this.state.lists.concat({name: listName, cards: []})
    })
  }

  onNewCard = (listName, cardName) => {
    this.setState({
      lists: insertCard(this.state.lists, listName, cardName),
    })
  }

  render() {
    return (
      <div>
        <NewListForm onNewList={this.onNewList}></NewListForm>
        {this.state.lists.map((l) => (<List key={l.name} name={l.name} onNewCard={this.onNewCard} cards={l.cards}/>) )}
      </div>
    );
  }
}
