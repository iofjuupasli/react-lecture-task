import React from 'react';
import Card from './Card';
import Input from './Input';
import Button from './Button';

export default class List extends React.Component {
  state = {
    newCardName: ''
  }

  onNewCardNameChanged = (e) => {
    this.setState({
        newCardName: e.target.value,
    });
  }

  onDeleteList = () => {
    this.props.onDeleteList(this.props.name);
  }

  onCreateNewCard = () => {
    this.props.onNewCard(this.props.name, this.state.newCardName);
  }

  onDeleteCard = (cardName) => {
    this.props.onDeleteCard(this.props.name, cardName);
  }

  onRenameCard = (newCardName, oldCardName) => {
    this.props.onRenameCard(this.props.name, newCardName, oldCardName);
  }

  render() {
    const listStyle = {
      display: 'table-cell',
      padding: '2%',
      width: '23%',
      backgroundColor: '#e6e6e6'
    }
    let cards = null;
    if (this.props.cards)
     cards = this.props.cards.map(c => (<Card key={c} name={c}
       onDeleteCardinList={this.onDeleteCard} onRenameCardinList={this.onRenameCard}/>) );
    return (
      <div style={listStyle}>
        <h1>{this.props.name}</h1>
        <Input onChange={this.onNewCardNameChanged} value={this.state.newCardName}/>
        <Button onClick={this.onCreateNewCard}>Add Task</Button>
        <Button onClick={this.onDeleteList}>Delete List</Button>
        {cards}
      </div>
    )
  }
}
