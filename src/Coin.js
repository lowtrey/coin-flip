import React from 'react';

class Coin extends React.Component {
    render() {
        return (
            <div>
                <h2>Let's flip a coin!</h2>
                <img src={`https://tinyurl.com/react-coin-${this.props.side}-jpg`} alt='' /><br />
                <button onClick={this.props.handleClick}>FLIP ME!</button>
                <p>Out of {this.props.flipCount} flips, there have been 50 heads and 50 tails.</p>
            </div>
        )
    }
}

export default Coin;