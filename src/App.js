import React, { Component } from 'react';
import './index.css'
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
      <div id="body">

        <div className="img1">
          <div className="topQuote">
            <div className="border">
              <div>
                Every once in a while, a new technology, an old problem, and a big idea turn into an innovation.
              </div>
              <div>
                - Dean Kamen
              </div>
            </div>
          </div>
          <div className="imgText">
            <div className="border">
              <div className='name'>
                Justin Oswald
              </div>
              <div className='title'>
                FullStack JavaScript Developer
              </div>
            </div>
            <nav className="navbar">
              <div className="navLinks" onClick={()=>this.workClickHandle()}>Work</div>
              <div className="navLinks" >Bio</div>
              <div className="navLinks" onClick={()=>this.homeClickHandle()}>Home</div>
            </nav>
          </div>
        </div>
        <section className="section section-light">
          <p><RonQuote/></p>
        </section>
        <div className="img2">
          <div className="imgText">
            <span className="border trans">
            </span>
          </div>
        </div>
        <section className="section section-dark">
          <h2>section two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque suscipit tempora cumque ex minus doloribus sint tempore, eum, blanditiis velit similique deserunt eius aperiam maxime adipisci neque aliquam praesentium perferendis accusantium! Ullam incidunt quo, quidem rem praesentium porro id quia nulla doloremque quis, tempore debitis eligendi? Quae excepturi eligendi ipsa necessitatibus quidem consectetur ut voluptates magni iure unde ipsum quo architecto ducimus repellat sed magnam maiores illo et dolor, dolorem libero pariatur sequi aperiam possimus! Expedita tenetur enim cumque ipsum ex, sapiente omnis alias, aperiam nihil dicta illum ipsa laboriosam provident assumenda ut inventore nobis aliquid tempora necessitatibus optio aut.
          </p>
        </section>
        <div className="img3">
          <div className="imgText">
            <span className="border trans">
            </span>
          </div>
        </div>
        <section className="section section-light">
          <h2>section three</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque suscipit tempora cumque ex minus doloribus sint tempore, eum, blanditiis velit similique deserunt eius aperiam maxime adipisci neque aliquam praesentium perferendis accusantium! Ullam incidunt quo, quidem rem praesentium porro id quia nulla doloremque quis, tempore debitis eligendi? Quae excepturi eligendi ipsa necessitatibus quidem consectetur ut voluptates magni iure unde ipsum quo architecto ducimus repellat sed magnam maiores illo et dolor, dolorem libero pariatur sequi aperiam possimus! Expedita tenetur enim cumque ipsum ex, sapiente omnis alias, aperiam nihil dicta illum ipsa laboriosam provident assumenda ut inventore nobis aliquid tempora necessitatibus optio aut.
          </p>
        </section>
        <div className="img1">
          <div className="imgText">
            <span className="border">
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
