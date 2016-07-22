import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/Board';

window.React = React;

ReactDOM.render(
    <Board />,
    document.getElementById('app')
);
