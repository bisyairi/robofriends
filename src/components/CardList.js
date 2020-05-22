import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // to see error
    // if(true){
    //     throw new Error('Noooooooooo!');
    // }
    return (
        <div>
        {
            robots.map((v, i) => {
            return <Card 
            key={robots[i].id} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}/>
            })
        }
        </div>
    );
}

export default CardList;