import React, {Component} from 'react'
import {Data} from './Images'
import ImageCard from './ImageCard'
let newArray= Data;
class Game extends Component{
    state ={
        trail:[],
    }
    click = (key) =>{
       
        if(this.state.trail.indexOf(key) > -1){
            this.setState(prevState =>({trail: [...prevState.trail,key]}))
            return console.log('lose')
        }
        else{
            this.setState(prevState =>({trail: [...prevState.trail,key]}))
            return console.log("win");
        }
    }
    shuffle =(array) =>{
        var i = 0
        , j = 0
        , temp = null
    
      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }
        componentDidMount(){
            this.shuffle(newArray);
        }
        componentDidUpdate(){
            this.shuffle(newArray);
        }
    render(){
        return(
            <div className = 'gameCont'>
            {newArray.map(item =>
            <ImageCard image ={item.image} key ={item.id} value= {item.id} trail= {this.click}></ImageCard>
            )}
            </div>
        )
    }
}
export default Game