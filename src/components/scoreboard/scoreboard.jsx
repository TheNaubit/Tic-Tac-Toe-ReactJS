// This is also a stateful component!

import React from 'react';
import { Link } from 'react-router-dom';

// Import the Header component
import { Header } from './../header/header';

// Import the Storage object!
import { Storage } from './../../storage/storage';

import './scoreboard.scss';

// Now let's create the Scoreboard component
export class Scoreboard extends React.Component {
    state = {
        scoreboard: []
    };

    // Once the component mounts, load any data from local storage and update the component state
    async componentDidMount() {
        let storage = await new Storage().getData();

        this.setState({
            scoreboard: storage
        });
    }

    // Now we have to create the component's render function
    render() {
        return (
            <div className="game">
                <Header showBackButton={false} />
                {/* Now a link to start a new game! */}
                <div id="wrapper-start-game">
                    <Link to="/board" className="btn-start-game">
                        <span>Start new game!</span>
                    </Link>
                </div>
                <div id="wrapper-recent-games">
                    <h2>Recent games</h2>
                    {/* And now we display a list with previous games */}
                    <ul>
                        {this.state.scoreboard.map((leader, key) => {
                            return (
                                <li key={key}>In this game, {leader}!</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}