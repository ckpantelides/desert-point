import React from 'react';

const Packages = () => (
  <section id='packages'>
    <h1>Packages</h1>
    <p>
      We offer surf lessons and surf guiding with meals and accomodation. We
      also offer camel riding, mountain biking and fishing.
    </p>
    <p>
      If you are looking for bed and breakfast without surfing or any other
      activities this is also available.
    </p>
    <p>
      Send us a message with what it is you're interested in and we'll get back
      to you with the best option to suit you.
    </p>
    <div className='package-container'>
      <div className='package-item'>
        <h2>SURF LESSONS</h2>
        <h3>€360</h3>
        <h4>for beginner and intermediate surfers</h4>
        <ul>
          <li>Transfer to & from Agadir airport/bus station</li>
          <li>Surfboard and wetsuit</li>
          <li>6 days of surf lessons</li>
          <li>6 nights accommodation</li>
          <li>All meals (breakfast, lunch and dinner)</li>
          <li>Transfer to the best surf spots</li>
          <li>Visit to Agadir souk with other excursions</li>
        </ul>
        <button>
          <a href='#booking'>Book now</a>
        </button>
      </div>
      <div className='package-item'>
        <h2>SURF GUIDING</h2>
        <h3>€320</h3>
        <h4>for experienced surfers</h4>
        <ul>
          <li>Transfer to & from Agadir airport/bus station</li>
          <li>Surfboard/wetsuit - if needed</li>
          <li>6 days of surf guiding</li>
          <li>7 nights accommodation</li>
          <li>All meals (breakfast, lunch and dinner)</li>
          <li>Transfer to the best surf spots</li>
          <li>Visit to Agadir souk with other excursions</li>
        </ul>
        <button>
          <a href='#booking'>Book now</a>
        </button>
      </div>
    </div>
  </section>
);

export default Packages;
