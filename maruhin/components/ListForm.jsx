import React from 'react';

export default class ListForm extends React.Component {
  state = {
    inputValue: ''
  }

  onInputValueChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  onClick = (e) => {
    this.props.createList(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputValueChange} placeholder="create a new list" value={this.state.inputValue}></input>
        <button onClick={this.onClick}>Add New List</button>
      </div>
    );
  }
};
