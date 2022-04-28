import React, { Component } from 'react'
import './homepage.css'
import Notelist from './Notelist'
import NewNote from './NewNote';



export default class Homepage extends Component {

  
  addnotee = (e) =>{
    document.getElementById("nwwnote").style.display = "flex"
  }
  

  render() {
    
    return (
      <div>
        <div className="homepage_navbar">
            <h1>NOTLAR</h1>
            <button onClick={this.addnotee}  className='addButton'><ion-icon id={"createicn"} name="add-outline"></ion-icon><p id='createtext'>Yeni Not Oluştur</p></button>
        </div>
        <NewNote/>
        <div>
            <Notelist />
        </div>
      </div>
    )
  }
}


