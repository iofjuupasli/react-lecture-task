import React from 'react';
import Lists from './Lists/Lists.jsx'
import NewListForm from './NewListForm/NewListForm'

export default class Board extends React.Component {

    render() {
        return (
          <div>
            <NewListForm></NewListForm>
            <Lists></Lists>
          </div>
        );
    }
}
