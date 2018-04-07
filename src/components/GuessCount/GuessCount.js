import React from 'react';
import PropTypes from 'prop-types'


export default class GuessCount extends React.Component{

    static propTypes = {
        guesses: PropTypes.number.isRequired
    }

    render() {
        const {guesses} = this.props
        return <span className="guesses">{guesses}</span>
    }

}
