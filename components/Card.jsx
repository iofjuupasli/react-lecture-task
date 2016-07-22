import React from 'react';

class Card extends React.Component {
    state = {
        task: this.props.cardInfo.task,
    };


    render() {
        return (
            <div className="card">
                <p>{this.props.cardInfo.task}</p>
            </div>
        );
    }
}

export default Card;
