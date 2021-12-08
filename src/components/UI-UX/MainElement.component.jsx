import React, { Component } from 'react'
import Weakness from '../../ElementComponents/Weakness.component.jsx'
import NewWeakness from '../../ElementComponents/NewWeakness.component.jsx'

import './MainElement.styles.css'

class MainElement extends Component{
    constructor(props){
        super();
        this.state = {
            weaknesses:[
                {
                    title:'Js Promises',
                    id: 1
                },
                {
                    title:'Algorithms',
                    id: 2
                },
                {
                    title:'UX Design',
                    id: 3
                },
                {
                    title:'Data Structures',
                    id: 4
                },
            ]
        }
    }

    addNewWeakness=(weakness)=>{
        const newWeaknessState = this.state.weaknesses
        newWeaknessState.push(weakness)
        this.setState((weaknesses)=>{
            return newWeaknessState
        })
    }

    render(){
       return (
        <div className="main">
            <NewWeakness weaknessLength={this.state.weaknesses.length} addWeaknessHandler={this.addNewWeakness} id={this.state.weaknesses.length + 1}/>
            {
                this.state.weaknesses.map(weakness => (
                    <Weakness key={weakness.id}>{weakness.title}</Weakness>
                ))
            }
        </div>
       )
        
    }

}
        
    

export default MainElement;