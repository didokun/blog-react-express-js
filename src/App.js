import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Card, GuessCount} from './components/card/Card'

import HallOfFame, {FAKE_HOF} from  './components/hallframe/HallOfFame'


class App extends Component {
  // Arrow fx for binding
  handleCardClick = (card) => {
    console.log(card, this);
  }
  render() {
    const won = new Date().getSeconds() % 2 === 0

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="memory">
          <GuessCount guesses={0} />
          <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
          <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
          <Card card="💖" feedback="justMismatched" onClick={this.handleCardClick} />
          <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
          <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
          <Card card="🐱" feedback="justMatched"  onClick={this.handleCardClick}  />
        </div>
        <h1>{won && <HallOfFame entries={FAKE_HOF} /> }</h1>
      </div>
    );
  }
}

export default App;
