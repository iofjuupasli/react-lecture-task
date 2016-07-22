import React from 'react';

class Card extends React.Component {
    state = {
        task: this.props.cardInfo.task
    };

    removeCard = () => {
      this.props.removeCard();
    }

    render() {
        return (
            <div className="card">
                <div onClick={this.removeCard} className='remove'>x</div>
                <p>{this.props.cardInfo.task}</p>
            </div>
        );
    }
}

export default Card;
