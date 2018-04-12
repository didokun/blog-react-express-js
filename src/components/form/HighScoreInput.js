
import PropTypes from 'prop-types'
import React, { Component } from 'react'

//import './HighScoreInput.css'

import { saveHOFEntry } from '../hallframe/HallOfFame'

export default class HighScoreInput extends Component {
    state = { winner: '' }

    static propTypes = {
        guesses: PropTypes.number.isRequired,
        onStored: PropTypes.func.isRequired,
    }
    
    handleWinnerUpdate = (event) => {
        this.setState({ winner: event.target.value.toUpperCase() })
    }

    persistWinner = (event) => {
        event.preventDefault()
        const newEntry = { guesses: this.props.guesses, player: this.state.winner }
        saveHOFEntry(newEntry, this.props.onStored)
    }

    render() {
        return (
        <form className="highScoreInput" onSubmit={this.persistWinner}>
            <p>
            <label>
                Bravo ! Entre ton prénom :
                <input autoComplete="given-name" onChange={this.handleWinnerUpdate} type="text" value={this.state.winner} />
            </label>
            <button type="submit">J’ai gagné !</button>
            </p>
        </form>
        )
    }
}
