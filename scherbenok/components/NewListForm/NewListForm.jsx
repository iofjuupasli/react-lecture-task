import React from 'react';
import Form from '../Form/Form'

export default class NewListForm extends React.Component {
  render() {
      return (
          <div>
            <h2>New list form</h2>
            <Form onClick={this.props.onListCreate} />
          </div>
      );
  }
};
