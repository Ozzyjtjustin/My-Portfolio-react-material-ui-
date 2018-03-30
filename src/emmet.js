<div class="img1">
  <div class="ptext">
    <span class="border">
      first image
    </span>
  </div>
</div>
<section class="section section-light">
  <h2>section one</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque suscipit tempora cumque ex minus doloribus sint tempore, eum, blanditiis velit similique deserunt eius aperiam maxime adipisci neque aliquam praesentium perferendis accusantium! Ullam incidunt quo, quidem rem praesentium porro id quia nulla doloremque quis, tempore debitis eligendi? Quae excepturi eligendi ipsa necessitatibus quidem consectetur ut voluptates magni iure unde ipsum quo architecto ducimus repellat sed magnam maiores illo et dolor, dolorem libero pariatur sequi aperiam possimus! Expedita tenetur enim cumque ipsum ex, sapiente omnis alias, aperiam nihil dicta illum ipsa laboriosam provident assumenda ut inventore nobis aliquid tempora necessitatibus optio aut.
  </p>
</section>
<div class="img2">
  <div class="ptext">
    <span class="border">
      second image
    </span>
  </div>
</div>
<section class="section section-dark">
  <h2>section two</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque suscipit tempora cumque ex minus doloribus sint tempore, eum, blanditiis velit similique deserunt eius aperiam maxime adipisci neque aliquam praesentium perferendis accusantium! Ullam incidunt quo, quidem rem praesentium porro id quia nulla doloremque quis, tempore debitis eligendi? Quae excepturi eligendi ipsa necessitatibus quidem consectetur ut voluptates magni iure unde ipsum quo architecto ducimus repellat sed magnam maiores illo et dolor, dolorem libero pariatur sequi aperiam possimus! Expedita tenetur enim cumque ipsum ex, sapiente omnis alias, aperiam nihil dicta illum ipsa laboriosam provident assumenda ut inventore nobis aliquid tempora necessitatibus optio aut.
  </p>
</section>
<div class="img3">
  <div class="ptext">
    <span class="border">
      third image
    </span>
  </div>
</div>
<section class="section section-dark">
  <h2>section three</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque suscipit tempora cumque ex minus doloribus sint tempore, eum, blanditiis velit similique deserunt eius aperiam maxime adipisci neque aliquam praesentium perferendis accusantium! Ullam incidunt quo, quidem rem praesentium porro id quia nulla doloremque quis, tempore debitis eligendi? Quae excepturi eligendi ipsa necessitatibus quidem consectetur ut voluptates magni iure unde ipsum quo architecto ducimus repellat sed magnam maiores illo et dolor, dolorem libero pariatur sequi aperiam possimus! Expedita tenetur enim cumque ipsum ex, sapiente omnis alias, aperiam nihil dicta illum ipsa laboriosam provident assumenda ut inventore nobis aliquid tempora necessitatibus optio aut.
  </p>
</section>
<div class="img1">
  <div class="ptext">
    <span class="border">
      first image
    </span>
  </div>
</div>









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
