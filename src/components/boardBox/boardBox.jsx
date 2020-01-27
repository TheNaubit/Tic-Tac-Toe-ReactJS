import React from 'react';

// Don't forget to import the component's style!
import './boardBox.scss';

// In other projects like the Search Autocomplete we have seen one
// way to create React Components by extending the React.Component class.
// Now we are going to see another way (a little bit shorter)
export const BoardBox = (props) => {
    // We will get the onClick function from our props!
    return (
        <button className="boardBox" onClick={props.onClick}>
            {props.value}
        </button>
    );
}