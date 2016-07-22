import React from 'react';
import Lists from './Lists/Lists.jsx'
import NewListForm from './NewListForm/NewListForm'

export default class Board extends React.Component {
  state = {
    lists: []
  }

  onListCreate = (name) => {
    this.setState({
      lists: [...this.state.lists, {
        name,
      }]
    })
  }

  render() {
      return (
        <div>
          <NewListForm onListCreate={this.onListCreate} />
          <Lists lists={this.state.lists} />
        </div>
      );
  }
}
