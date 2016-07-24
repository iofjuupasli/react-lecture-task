import React from 'react';

export default class Task extends React.Component {

    render() {
      return (
        <p>{this.props.children}</p>
      )
    }
}
