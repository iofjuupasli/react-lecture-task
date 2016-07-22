import React from 'react';
import List from '../List/List';

export default class Lists extends React.Component {
  render() {
      return (
        <div>
          { this.props.lists.map(elem => (<List name={elem.name} />)) }
        </div>
      );
  }
};
