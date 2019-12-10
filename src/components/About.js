import React from "react";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="eight columns">
        <h2>About</h2>
        <p>
          Want to experience a real Moroccan adventure and learn how to surf?
          Come to Moknari, our small family village. We're on a desert
          surrounded by mountains with a private beach spot! We'll teach you how
          to surf, take you hiking, camel riding and fishing, teach you to make
          argon oil…
        </p>
        <p>
          Our surf course is suitable for beginners and intermediate level
          surfers, from age 8 to 50. We also offer surf guiding for experienced
          surfers, taking you to the best spots around
        </p>
        <p>Surf camp Moknari, not only a surf school - a life experience!</p>
        <h2>Contact Details</h2>
        <p className="address">
          <span>Desert Point Surf House</span>
          <br />
          <span> Moknari village</span>
          <br />
          <span>Tamri, Agadir 80502</span>
          <br />
          <span>Morocco</span>
          <br />
          <span>+212 611-833291</span>
        </p>
      </div>
      <div className="three columns">
        <h2>Our team</h2>
        <p>Hicham</p>
        <img src="images/hicham.jpg" className="profile-pic" alt="Hicham" />
        <p>Faical</p>
        <img src="images/faical.jpg" className="profile-pic" alt="Faical" />
      </div>
    </div>
  </section>
);

export default About;
