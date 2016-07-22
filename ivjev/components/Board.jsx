import React from 'react';
import ToDoList from './ToDoList';

export default class Board extends React.Component {
  state = {
    lists: [],
    listsInput: '',
  }
  addNewList = (event) => {
    event.preventDefault();
    this.setState({
      lists: this.state.lists.concat([this.state.listsInput]),
      listsInput: '',
    });
  }
  editListInput = (event) => {
    this.setState({
      lists: this.state.lists,
      listsInput: event.target.value,
    });
  }
  render() {
    const listsArr = this.state.lists.map((u, i) => (
      <ToDoList
        listName={u}
        key={i}
      />));
    return (
      <div>
        <form onSubmit={this.addNewList}>
          <input
            onChange={this.editListInput}
            type="text"
            value={this.state.listsInput}
          />
          <button>New list</button>
        </form>
        {listsArr}
      </div>
    );
  }
}
