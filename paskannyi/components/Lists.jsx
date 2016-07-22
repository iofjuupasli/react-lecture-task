import React from 'react';
import List from './List';

export default class Lists extends React.Component {

    render() {
        return (
            <div className="lists-wrapper">
              { this.props.lists.map(list => (<List name={list} key={list} />)) }
            </div>
        );
    }
}
