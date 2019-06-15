import React from 'react';
import Coin from './Coin';

class Flipper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipCount: 0,
            side: 'heads',
            headsCount: 0,
            tailsCount: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let face = (Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails';
        this.setState((prevState) => {
            return {
                side: face,
                flipCount: prevState.flipCount + 1, 
                headsCount: prevState.headsCount + (face === 'heads' ? 1 : 0),
                tailsCount: prevState.tailsCount + (face === 'tails' ? 1 : 0)
            };
        });
    }

    render() {
        return (
            <div>
                <Coin 
                    handleClick={this.handleClick}
                    flipCount={this.state.flipCount}
                    side={this.state.side}
                    heads={this.state.headsCount}
                    tails={this.state.tailsCount}
                />
            </div>
        )
    }
}

export default Flipper;