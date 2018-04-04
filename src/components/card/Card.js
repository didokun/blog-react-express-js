import React from 'react';

import './Card.css';


const HIDDEN_SYMBOL = '❓'


export const Card = ({card, feedback, onClick}) => 
    <div className={`card ${feedback}`} onClick={() => onClick(card)}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>



export const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>
