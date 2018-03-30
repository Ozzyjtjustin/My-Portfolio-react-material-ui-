

<div id="background">
  <div id="background-overlay">




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
