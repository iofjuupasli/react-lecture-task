import React from 'react';
import Card from './Card';
import Input from './Input';
import Button from './Button';

export default class List extends React.Component {
  state = {
    newCardName: '',
    listNameChanged: ''
  }

  onNewCardNameChanged = (e) => {
    this.setState({
        newCardName: e.target.value,
    });
  }

  onDeleteList = () => {
    this.props.onDeleteList(this.props.name);
  }

  onRenameListNameChanged = (e) => {
    this.setState({
        listNameChanged: e.target.value,
    });
  }

  onRenameList = () => {
    this.props.onRenameList(this.state.listNameChanged, this.props.name);
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
      padding: '2%',
      width: '23%',
      backgroundColor: '#e6e6e6',
      marginLeft: '2%',
      float: 'left',
      listStyle: 'none'
    }
    let cards = null;
    if (this.props.cards)
     cards = this.props.cards.map(c => (<Card key={c} name={c}
       onDeleteCardinList={this.onDeleteCard} onRenameCardinList={this.onRenameCard}/>) );
    return (
      <li style={listStyle}>
        <div>
          <h1>{this.props.name}</h1>
          <Button onClick={this.onDeleteList}>Delete List</Button>
        </div>
        <div>
          <Input onChange={this.onRenameListNameChanged} value={this.state.listNameChanged}/>
          <Button onClick={this.onRenameList}>Rename List</Button>
        </div>
        <Input onChange={this.onNewCardNameChanged} value={this.state.newCardName}/>
        <Button onClick={this.onCreateNewCard}>Add Task</Button>
        {cards}
      </li>
    )
  }
}
