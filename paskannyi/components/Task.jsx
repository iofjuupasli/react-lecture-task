import React from 'react';

export default class Task extends React.Component {

  // state = {
  //
  // }

    render() {
        return (
          <div>
            <p>{this.props.name}</p>
          </div>
        );
    }
}
