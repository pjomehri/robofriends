import React from 'react';
import Cards from './Cards';
import './CardsList.styles.css';

const CardsList = ({ robots }) => {
    return (
        <div className="card-list">
        {
            robots.map((robot, i)=> {
                return  (
                    <Cards 
                        key={robots[i].id} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                    />
                );
            })
        }      
        </div>
    );
}

export default CardsList;