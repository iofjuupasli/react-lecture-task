import React from 'react';

const Button = ({onClick, children}) => (
    <button onClick={onClick}>{children}</button>
);

export default class Item extends React.Component {
    onDeleteItem = () => {
        this.props.onDelete();
    };

    render() {
        return (
            <div>
                <div className="item">
                    {this.props.itemContent}
                </div>
                <Button onClick={this.onDeleteItem}>del list</Button>
            </div>
        );
    }
}
