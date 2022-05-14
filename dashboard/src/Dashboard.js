import React from 'react';
// import {Routes, Route} from 'react-router-dom'
import ListTotal from './components/ListTotals';

export default function Dashboard() {
    return (
        <div>
        {/* <Routes> */}
            {/* <Route path="/" element={}/> */}
            <ListTotal/>
        {/* </Routes> */}
        </div>
        // <div className='Dash-container'>
        //     <h1>Ultimo usuario creado</h1>

        //     <h2>Nombre: {props.user.first_name}</h2>
        //     <h2>Apellido: {props.user.last_name}</h2>
        //     <h2>Email: {props.user.email}</h2>
        // </div>
    )
}