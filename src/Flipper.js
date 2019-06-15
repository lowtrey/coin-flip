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
            if(face === 'heads') {
                return {flipCount: prevState.flipCount + 1, side: face, headsCount: prevState.headsCount + 1};
            } else {
                return {flipCount: prevState.flipCount + 1, side: face, tailsCount: prevState.tailsCount + 1};
            }
          });
        console.log(this.state.headsCount, this.state.tailsCount, face);
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