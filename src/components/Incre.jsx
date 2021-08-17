import React, { Component } from 'react'

class Incre extends Component {
   constructor(){
       super()

       this.state = {
           meaninOfLife: 0

       }
   }

   handleClick = () => {
       this.setState((prevState, preveProps)=> {
            return {meaninOfLife: this.state.meaninOfLife + 1}
       })
   }

   handleChange = () => {
       this.setState((prevState, preveProps) => {
           return {meaninOfLife: this.state.meaninOfLife -1}
       })
   }
    render() {
        return (

            <div>
            <button onClick={this.handleClick}>Update button</button>
            <h1>{this.state.meaninOfLife}</h1>
            <button onClick={this.handleChange}>Downgrade</button>
            
                
            </div>
        )
    }
}

export default Incre

