import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// First, import the Board and Scoreboard views
import {Board} from './../board/board';
import {Scoreboard} from './../scoreboard/scoreboard';

// Now import the general styles
import './../../assets/sass/style.scss';

// Let's create the App component
export class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/*<BrowserRouter basename="/Tic-Tac-Toe-ReactJS/">*/}
                <BrowserRouter>
                    <Route exact path="/" component={Scoreboard}/>
                    <Route path="/board" component={Board}/>
                </BrowserRouter>
            </div>
        );
    }
}