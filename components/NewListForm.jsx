import React from 'react';
import Input from './Input';
import Button from './Button';

export default class NewListForm extends React.Component {
  state = {
    newListName: '',
  }

  onNewListNameChanged = (e) => {
    this.setState({
        newListName: e.target.value,
    });
  }

  onCreateNewList = () => {
    this.props.onNewList(this.state.newListName)
  }

  render() {
    return (
      <div>
        <Input onChange={this.onNewListNameChanged} value={this.state.newListName} />
        <Button onClick={this.onCreateNewList}>Add List</Button>
      </div>
    )
  }
}
