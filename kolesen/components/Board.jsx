import React from 'react';
import NewListForm from './NewListForm';
import Lists from './Lists';

export default class Board extends React.Component {
  state = {
    lists: []
  };

  onAddNewList = (item) => {
    this.setState({
      lists: [...this.state.lists, item]
    })
  }

  render() {
      return (
          <div>
            <NewListForm onAddNewList={this.onAddNewList}/>
            <Lists lists={this.state.lists} />
          </div>
      );
  }
}
