import React from 'react';
import Coin from './Coin';

class Flipper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipCount: 0,
            side: 'heads',
            headsCount: 0,
            tailsCound: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let face = (Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails';
        this.setState((prevState) => {
            return {flipCount: prevState.flipCount + 1, side: face};
          });
        console.log(this.state.flipCount, face);
    }

    render() {
        return (
            <div>
                <Coin 
                    handleClick={this.handleClick}
                    flipCount={this.state.flipCount}
                    side={this.state.side}
                />
            </div>
        )
    }
}

export default Flipper;