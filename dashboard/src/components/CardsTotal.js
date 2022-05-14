import React from 'react';

function CardsTotal(props){
    return(
        <div>
            <h1>{props.total.name}</h1>
            <h2>{props.total.total}</h2>
        </div>
    )
}

export default CardsTotal