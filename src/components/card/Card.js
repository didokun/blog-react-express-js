import React from 'react';
import PropTypes from 'prop-types'

import './Card.css';


const HIDDEN_SYMBOL = '❓'

export class Card extends React.Component {
    static propTypes = {
        card: PropTypes.string.isRequired,
        feedback: PropTypes.oneOf([
        'hidden',
        'justMatched',
        'justMismatched',
        'visible',
        ]).isRequired,
        onClick: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
    }

    render() {
        const {card, feedback, onClick, index} = this.props;
        return (<div className={`card ${feedback}`} onClick={() => onClick(index)}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
        </div>
        )
    }
}
