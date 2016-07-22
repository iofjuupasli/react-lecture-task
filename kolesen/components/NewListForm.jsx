import React from 'react';

export default class NewListForm extends React.Component {
  state = {
    name: ''
  }

  addNewList = event => {
    this.props.onAddNewList(this.state.name)
  }
  changeListName = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
        <div>
          <p>NewListForm!</p>
          <input type= "text" value={this.state.name} onChange={this.changeListName}/>
          <button onClick={this.addNewList}>Add new List</button>
        </div>
    );
  }
}
