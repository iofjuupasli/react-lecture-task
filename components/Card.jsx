import React from 'react';
import Input from './Input';
import Button from './Button';

export default class Card extends React.Component {
  state = {
    cardNameChanged: ''
  }

  onDeleteCard = () => {
    this.props.onDeleteCardinList(this.props.name);
  }

  onRenameCardNameChanged = (e) => {
    this.setState({
        cardNameChanged: e.target.value,
    });
  }

  onRenameCard = () => {
    this.props.onRenameCardinList(this.state.cardNameChanged, this.props.name);
  }

  render() {
    return (
      <div style={{backgroundColor: '#b7b7b7'}}>
      <h3>{this.props.name}</h3>
      <Button onClick={this.onDeleteCard}>Delete Card</Button>
      <Input onChange={this.onRenameCardNameChanged} value={this.props.name}/>
      <Button onClick={this.onRenameCard}>Rename Task</Button>
      </div>
    )
  }
}
