import React, { Component } from 'react';
import Board from './Board';

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
            <div>
                {this.state.usersList.map((user, i) => {
                    return(
                    <Board key={i} user={user} />
                    )
                })}
            </div>
        )
    }
}

export default Users