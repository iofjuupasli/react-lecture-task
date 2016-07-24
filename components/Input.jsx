import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
      <input type="text" onChange={this.props.onChange} value={this.props.children} />
    )
  }
}
