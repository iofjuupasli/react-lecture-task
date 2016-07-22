import React from 'react';

export default class Form extends React.Component {
  state = {
    inputValue: '',
  }

  onInputValueChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  onClick = (e) => {
    this.props.onClick(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  render() {
      return (
          <div>
            <input type="text" onChange={this.onInputValueChange} value={this.state.inputValue}></input>
            <button onClick={this.onClick}>Add</button>
          </div>
      );
  }
};
