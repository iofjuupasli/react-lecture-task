import React from 'react';

export default class Task extends React.Component {
  propTypes = {
    txt: React.PropTypes.string.isRequired,
    removeTask: React.PropTypes.func.isRequired,
  }
  state = {
    done: 'Not',
  }
  taskDone = () => {
    if (this.state.done === 'Not') {
      this.setState({ done: 'Yes' });
    }
  };
  render() {
    return (
      <div>
        {this.props.txt}
        <button onClick={this.taskDone}>{this.state.done}</button>
        <button onClick={() => this.props.removeTask(this.props.txt)}>
          Remove
        </button>
      </div>
    );
  }
}
