import React, { Component } from 'react'
import Note from './Note'



export default class Notelist extends Component {

  constructor(props){
    super(props)

    this.state ={
      noteall:[
        
        
    ]
    };
  } 



  render() {
    
    fetch("/get")
    .then(res => res.json())
    .then(res => this.setState({noteall:res}))
    
    return (
      <div>
        <div className='notelist'>

      {this.state.noteall.map(noteall => {
        return <Note
          key = {noteall.id}
          id = {noteall.id}
          title = {noteall.title}
          write = {noteall.write}
        />
      })}

    </div>
      </div>
    )
  }
}
