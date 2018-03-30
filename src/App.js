import React, { Component } from 'react';
import './HomePage.css';
import profile from './assets/backdrop.png'
import {RonQuote} from './RonQuote'
import {Work} from './Work'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pageFill:null
    }
  }

  workClickHandle = () => {
    return this.setState({pageFill: 'work'})
  }

  homeClickHandle = () => {
    return this.setState({pageFill: null})
  }


  render() {
    return (
      <div id="background">
        <div id="background-overlay">
          <RonQuote/>
          <div className="jumbo">
            <div className="jumbo-contents" >
              <h1>Justin Oswald</h1>
              <h3>FullStack JavaScript Developer</h3>
              <img id="me" src={profile} alt=' ' className="responsive"/>
              <nav className="navbar">
                <div className="navLinks" onClick={()=>this.workClickHandle()}>Work</div>
                <div className="navLinks" >Bio</div>
                <div className="navLinks" onClick={()=>this.homeClickHandle()}>Home</div>
              </nav>
            </div>
            <div className="subPage">
                <Work pageFill={this.state.pageFill} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
