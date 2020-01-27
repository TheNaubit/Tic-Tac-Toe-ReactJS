// This will be a stateful component (and also the main board for our game!)

import React from 'react';

// Import the Header component
import { Header } from './../header/header';

// We import the Storage object
import { Storage } from './../../storage/storage';

// And the BoardBox component
import { BoardBox } from './../boardBox/boardBox';

// And the Popup component (to show a message when game ends)
import { Popup } from './../popup/popup';

// Finally, import the utility functions
import * as Utils from './../../utils/functions';

// Oh, and import the board style!
import './board.scss';

// Let's create the Board component!
export class Board extends React.Component {
    // Now we use this other way to declare our component
    constructor(props) {
        // Don't forget to pass our props to the parent component with super!
        super(props);

        // Now we have to initialize the component's state
        this.state = {
            // With the 'matrix' for the game
            boxes: Array(9).fill(null),
            // The array which contains all the movements done in the game
            history: [],
            // And a bool var with the next turn player
            xIsNext: true
        }
        this.handleBoxClick = this.handleBoxClick.bind(this);
    }

    // Now we have to create an instace of the Storage object
    storage = new Storage();

    // Let's create the handlers
    // First the handle of each box (the board boxes)
    handleBoxClick = (index) => {
        // First get the current state of the boxes
        const boxes = this.state.boxes.slice();

        // And the current state of history
        let history = this.state.history;

        // If the board contains a winning combination
        // We can stop the game!!
        if (Utils.findWinner(boxes) || boxes[index]) {
            // Maybe not the best way to do this
            // So I am adding a TODO here so I will check it later!

            return;
        }

        // Also, we have to stop the game if all boxes are clicked (so they are filled)
        if (Utils.areAllBoxesClicked(boxes) === true) {
            return;
        }

        let boxMark = this.state.xIsNext ? 'x' : 'o';

        // If we are still here, we can mark the clicked box as 'X' or 'O'
        boxes[index] = boxMark;

        // And add the move to the game history
        history.push(boxMark);

        // Finally, update the component state with the new data
        // Remember, we update the component state with setState and not by
        // modifying the state var!!!
        this.setState({
            boxes: boxes,
            history: history,
            xIsNext: !this.state.xIsNext
        });
    }

    // Now we have to create the render function for this component
    render() {
        // If there is a winner, let's get it!
        const winner = Utils.findWinner(this.state.boxes);

        // Check if all boxes are filled (checked)
        const isFilled = Utils.areAllBoxesClicked(this.state.boxes);

        // This is just a var for our status message
        let status;

        // If there is a winner...
        if (winner) {
            // ...create a status message
            // Notice the ` instead ' or " to be able to use vars inside!
            status = `The winner is: ${winner}!`;

            // And push the data about the game to the storage
            // This is not the coolest way to do this, so
            // I add a TODO to improve it later
            let old_storage = this.storage.getData();
            old_storage = old_storage.concat([`${winner} won`]);
            this.storage.update(old_storage);
        } else if (!winner && isFilled) {
            // If there is no winner but board is full
            // The game is drawn, so create its status message
            status = 'Game drawn!';

            // And push it to the storage
            this.storage.update(['Game drawn']);
        } else {
            // If the game is still running, we ask the next player
            // to make its move
            status = `It is ${(this.state.xIsNext ? 'x' : 'o')}'s turn.`;
        }

        // Now we have to return the rende result
        return (
            // We use <> and </> as the initial element since we need only one root element!
            <>
                {(winner || isFilled) && <Popup message={status}/>}
                
                {/* Add the link to the scoreboard */}
                <Header showBackButton={true} />

                {/* Now the game baord */}
                <div className="board-wrapper">
                    <div className="board-item">
                        <div className="board">

                            {/* The heading */}
                            <h2 className="board-heading">{status}</h2>

                            {/* The actual board */}
                            <div className="board-row">
                                <BoardBox value={this.state.boxes[0]} onClick={() => this.handleBoxClick(0)} />
                                <BoardBox value={this.state.boxes[1]} onClick={() => this.handleBoxClick(1)} />
                                <BoardBox value={this.state.boxes[2]} onClick={() => this.handleBoxClick(2)} />
                            </div>

                            <div className="board-row">
                                <BoardBox value={this.state.boxes[3]} onClick={() => this.handleBoxClick(3)} />
                                <BoardBox value={this.state.boxes[4]} onClick={() => this.handleBoxClick(4)} />
                                <BoardBox value={this.state.boxes[5]} onClick={() => this.handleBoxClick(5)} />
                            </div>

                            <div className="board-row">
                                <BoardBox value={this.state.boxes[6]} onClick={() => this.handleBoxClick(6)} />
                                <BoardBox value={this.state.boxes[7]} onClick={() => this.handleBoxClick(7)} />
                                <BoardBox value={this.state.boxes[8]} onClick={() => this.handleBoxClick(8)} />
                            </div>

                        </div>
                    </div>
                    <div className="board-item">
                        {/* The board history */}
                        <div className="board-history">
                            <h2 className="board-heading">Moves history</h2>

                            {/* Here goes a list with the moves' history */}
                            <ul className="board-historyList">
                                {this.state.history.length <= 0 && <p>No moves to show.</p>}

                                {this.state.history.length > 0 && this.state.history.map((move, index) => {
                                    return (
                                        <li key={index}>Move {index + 1}: <strong>{move}</strong></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}