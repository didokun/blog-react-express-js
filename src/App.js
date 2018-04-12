import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Card} from './components/card/Card'
import _ from 'lodash'

import HallOfFame from  './components/hallframe/HallOfFame'
import GuessCount from  './components/GuessCount/GuessCount'
import HighScoreInput from  './components/form/HighScoreInput'


const SIDE = 2
const SYMBOLS = ['😀' ,'🎉' ,'💖','🎩', '🐶', '🐱', '🦄' , '🐬' , '🌍' , '🌛', '🌞', '💫', '🍎', '🍌', '🍓', '🍐', '🍟', '🍿']
const VISUAL_PAUSE_MSECS = 750


class App extends Component {
  state = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    hallOfFame: null,
    matchedCardIndices: [],
  } 


  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = _.shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return _.shuffle(result)
  }

  // Arrow fx for binding
  displayHallOfFame = (hallOfFame) => {
    this.setState({ hallOfFame })
  }

  // Arrow fx for binding
  handleNewPairClosedBy(index) {
    const { cards, currentPair, guesses, matchedCardIndices } = this.state
    const newPair = [currentPair[0], index]
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair, guesses: newGuesses })
    if (matched) {
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] })
    }
    setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS)
  }

  // Arrow fx for binding
  handleCardClick = (index) => {
    const { currentPair } = this.state
    if (currentPair.length === 2) {
      return
    }

    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] })
      return
    }

    this.handleNewPairClosedBy(index)
  }

  getFeedbackForCard(index) {
    const { currentPair, matchedCardIndices } = this.state
    const indexMatched = matchedCardIndices.includes(index)
  
    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }
  
    if (currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched'
    }
    return indexMatched ? 'visible' : 'hidden'
  }

  render() {
    const { cards, guesses, hallOfFame, matchedCardIndices } = this.state
    const won = matchedCardIndices.length === cards.length
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Guess Count : <GuessCount guesses={guesses} />
        </p>
        <div className="memory">
          {cards.map((card, index) => (
            <Card
              card={card}
              feedback={this.getFeedbackForCard(index)}
              key={index}
              index={index}
              onClick={this.handleCardClick}
            />
          ))}
        </div>
        {
          won &&
            (hallOfFame ? (
              <HallOfFame entries={hallOfFame} />
            ) : (
              <HighScoreInput guesses={guesses} onStored={this.displayHallOfFame} />
            ))
        }
      </div>
    );
  }
}

export default App;
