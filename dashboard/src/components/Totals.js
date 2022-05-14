import React, {Component} from 'react';
import CardsTotal from './CardsTotal';

class Total extends Component{
    constructor(props){
        super(props);
        this.state = {
            listTotal: []
        }
    }

    componentDidMount(){

        fetch('/api/total')
            .then(res => {
                return res.json()
            })
            .then(total => {
                this.setState({
                    listTotal: total.data
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div className='carrusel'>
                 {
                     this.state.listTotal.map((total, index) => {
                         return (
                             <CardsTotal key={index} total={total}/>
                         )
                     })
                 }
            </div>
        )
    }
}

export default Total