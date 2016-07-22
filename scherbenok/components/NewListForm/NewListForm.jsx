import React from 'react';
import Form from '../Form/Form'
import './NewListForm.css'

export default class NewListForm extends React.Component {
  render() {
      return (
          <div className='new_list_form'>
            <h2>New list form</h2>
            <Form onClick={this.props.onListCreate} />
          </div>
      );
  }
};
