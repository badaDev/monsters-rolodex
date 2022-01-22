import React from 'react';

import './cards.styles.css';




export const Cards = props => {
    return <div className="card-container">
        <h1>
            {
            props.monsters.name
            }
        </h1>
    </div>
}