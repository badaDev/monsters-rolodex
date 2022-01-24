import React from 'react';

import './cards.styles.css';




export const Cards = props => {
    return <div className="card-container">
        <img src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} alt="monster"/>
        <h2>
            {
            props.monsters.name
            }
        </h2>
        <p>
            {
            props.monsters.email
            }
        </p>
    </div>
}