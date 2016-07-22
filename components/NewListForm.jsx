import React from 'react';

export default class NewListForm extends React.Component {

  state = {
    listName: ''
  }

  onListNameChange = (event) => {
    this.setState({
      listName: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange = { this.onListNameChange } value = { this.state.listName }/>
        { this.state.listName && (
          <button onClick = {() => { this.props.onListCreate(this.state.listName) }}>Add list</button>)
        }
      </div>
    )
  }
}
