import React from 'react';

// Don't forget to import the component's style!
import './popup.scss';


import { Link } from 'react-router-dom';

// This is a stateless component!
export const Popup = (props) => {
    const message = props.message;
    return (
        <div className="popup">

            <div className="popup-wrapper">
                <div className="popup-inner">
                    <h2>{message}</h2>
                    <Link to="/" id="btnPopupNewGame">Back To Menu</Link>
                </div>
            </div>

        </div>
    );
}