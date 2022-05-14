import React from 'react';

export default function CardsUser(props){
    return(
        <div className='card'>
            <h2 className='user'>Nombre: {props.user.first_name}</h2>
            <h2 className='user'>Apellido: {props.user.last_name}</h2>
            <h2 className='user'>Email: {props.user.email}</h2>
        </div>
    )
}
