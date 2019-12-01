import React from 'react';
import './Cards.styles.css';

const Cards = ({id, name, email}) => {
    return (
        //tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5 
        <div className="card-container">
            <img src={`https://robohash.org/${id}?size=200x200&set=set2`} alt='robots'/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
};

export default Cards;