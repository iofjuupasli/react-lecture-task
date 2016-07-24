import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <h3>{this.props.name}</h3>
    )
  }
}
