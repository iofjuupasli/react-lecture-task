import React from 'react';

export default class ListForm extends React.Component {

   state = {
     name: ''
   };

   onListChange = e => {
    this.setState ({
      name: e.target.value
    });
   };

    onListCreate = () => {
     this.props.addList(this.state.name);
     this.setState({
       name: ''
     })
    }

    render() {
        return (
            <div className="list-form">
              <input type="text" value={this.state.name} onChange={this.onListChange}/>
              <button onClick={this.onListCreate}>Add list</button>
            </div>
        );
    }
}
