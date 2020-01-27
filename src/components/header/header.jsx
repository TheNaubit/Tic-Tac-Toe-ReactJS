import React from 'react';

// Don't forget to import the component's style!
import './header.scss';


import {Link} from 'react-router-dom';

// This is a stateless component!
export const Header = (props) => {
    const showBackButton = props.showBackButton;
    return (
        <div className="topnav">

            <div className="topnav-centered">
                <a href="#home" className="active">Tic Tac Toe in ReactJS!</a>
            </div>

            {showBackButton===true ?
             <Link to="/">&lt; Back to Scoreboard</Link> :
             <Link to="/" className="hidden">&lt; Back to Scoreboard</Link> 
            }

        </div>
    );
}