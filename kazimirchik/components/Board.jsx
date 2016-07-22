import React from 'react';
import List from './List';

export default class Board extends React.Component {
  state = {
    lists: [],
    value: ""
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
      lists: this.state.lists
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      lists: this.state.lists.concat([this.state.value])
    })
  }

  render() {
    const lists = this.state.lists.map((elem, index) => {
      return <List name = {elem} key = {index}/>
    })
    return (
        <div>Board!
          <form onSubmit = {this.onSubmit}>
            <input
              type = "text"
              value = {this.state.value}
              onChange={this.onChange}
            />
          <button>Add list</button>
          </form>
          {lists}
        </div>
    );
  }
}
