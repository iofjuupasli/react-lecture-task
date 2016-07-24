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

  onCreateNewCard = () => {
    this.props.onNewCard(this.props.name, this.state.newCardName);
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
