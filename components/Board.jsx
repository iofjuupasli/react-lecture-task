import React from 'react';

const Button = ({onClick, children}) => (
   <input type="submit" onClick={onClick} value={children}/>
);

class Input extends React.Component {
  render() {
    return (
      <input type="text" onChange={this.props.onChange} value={this.props.children} />
    )
  }
}

class NewListForm extends React.Component {
  state = {
    newListName: '',
  }

  onNewListNameChanged = (e) => {
    this.setState({
        newListName: e.target.value,
    });
  }

  onCreateNewList = () => {
    this.props.onNewList(this.state.newListName)
  }

  render() {
    return (
      <div>
        <Input onChange={this.onNewListNameChanged} value={this.state.newListName} />
        <Button onClick={this.onCreateNewList}>Add List</Button>
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <h3>{this.props.name}</h3>
    )
  }
}

class List extends React.Component {
  state = {
    newCardName: ''
  }

  onNewCardNameChanged = (e) => {
    this.setState({
        newCardName: e.target.value,
    });
  }

  onCreateNewCard = () => {
    this.props.onNewCard(this.props.name, this.state.newCardName);
    /*this.setState({
        cards: this.state.cards.concat(this.state.newCardName),
    });*/
  }

  render() {
    let cards = null;
    if (this.props.cards)
     cards = this.props.cards.map(c => (<Card key={c} name={c}/>) );
    return (
      <div>
        <h1>{this.props.name}</h1>
        <Input onChange={this.onNewCardNameChanged} value={this.state.newCardName}/>
        <Button onClick={this.onCreateNewCard}>Add Task</Button>
        {cards}
      </div>
    )
  }
}

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
