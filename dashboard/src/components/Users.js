import React, { Component } from 'react';
import CardsUser from './CardsUser';

class Users extends Component{
    constructor(props){
        super(props);

        this.state = {
            usersList: []
        }
    }

    componentDidMount(){
        fetch('/api/user')
            .then(res => {
                return res.json()
            })
            .then(users => {
                this.setState({
                    usersList: users.data
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div className='container'>
                 <h1>Último usuario creado</h1>
                {this.state.usersList.map((user, index) => {
                    return(
                    <CardsUser key={index} user={user}/>
                    )
                })}
            </div>
        )
    }
}

export default Users