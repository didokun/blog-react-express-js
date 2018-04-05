import React from 'react';
import PropTypes from 'prop-types'

import './Card.css';


const HIDDEN_SYMBOL = '❓'

/*class Card extends React.Component {
    constructor(prop) {
        super(prop)
    }

    render() {
        return (<div className={`card ${feedback}`} onClick={() => onClick(card)}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
        </div>
        )
    }
}
*/
export const Card = ({card, feedback, onClick}) => 
    (<div className={`card ${feedback}`} onClick={() => onClick(card)}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>)

//Default Values from prop
/*Card.defaultProps = {
    feedback: 'hidden'
}*/

//Validation for prop
Card.propTypes = {
    card: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
      'hidden',
      'justMatched',
      'justMismatched',
      'visible',
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
  }

export const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

GuessCount.propTypes = {
    guesses: PropTypes.number.isRequired,
  }