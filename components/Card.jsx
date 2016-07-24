import React from 'react';
import Input from './Input';
import Button from './Button';

export default class Card extends React.Component {
  onDeleteCard = () => {
    this.props.onDeleteCardinList(this.props.name);
  }

  render() {
    return (
      <div style={{backgroundColor: '#b7b7b7'}}>
      <h3>{this.props.name}</h3>
      <Button onClick={this.onDeleteCard}>Delete Card</Button>
      </div>
    )
  }
}
