import React from 'react';
import useBookingForm from './CustomHooks';
import axios from 'axios';

const Booking = () => {
  // callback function called after form below is submitted
  // sends input data to server via axios
  const booking = () => {
    alert(`Booking enquiry sent. Thanks ${inputs.name}`);
    axios
      .post(`https://desert-point-server.herokuapp.com/post`, { inputs })
      .then(res => {});
  };

  // a useBookingForm hook will handle the input changes and input submission
  const { inputs, handleInputChange, handleSubmit } = useBookingForm(
    { name: '', email: '', telephone: '', dates: '', package: '', message: '' },
    booking
  );

  return (
    <section id='booking'>
      <h1>Booking enquiry</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label>Name</label>
            <input
              type='text'
              name='name'
              onChange={handleInputChange}
              value={inputs.name}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type='text'
              name='email'
              onChange={handleInputChange}
              value={inputs.email}
              required
            />
          </div>

          <div>
            <label htmlFor='telephone'>Telephone</label>
            <input
              type='text'
              name='telephone'
              onChange={handleInputChange}
              value={inputs.telephone}
            />
          </div>
          <div>
            <label>Dates</label>
            <input
              type='text'
              name='dates'
              onChange={handleInputChange}
              value={inputs.dates}
            />
          </div>
          <div>
            <label>Package</label>
            <input
              type='text'
              name='package'
              onChange={handleInputChange}
              value={inputs.package}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name='message'
              onChange={handleInputChange}
              value={inputs.message}
            ></textarea>
          </div>

          <div>
            <button type='submit'>Submit</button>
          </div>
        </fieldset>
      </form>
      <a href='https://www.facebook.com/SurfHouseDesertPoint/' target='blank'>
        <img className='social-icon' src='images/f_logo.png' alt='facebook' />
      </a>
      <a href='https://www.instagram.com/surfhousedesertpoint/' target='blank'>
        <img
          className='social-icon'
          src='images/insta_logo.png'
          alt='instagram'
        />
      </a>
    </section>
  );
};

export default Booking;
