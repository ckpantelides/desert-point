import React from "react";

const Booking = () => (
  <section id="booking">
    <h1>Booking request</h1>
    <form action="" method="post" id="contactForm" name="contactForm">
      <fieldset>
        <div>
          <label htmlFor="contactName">Name</label>
          <input
            type="text"
            defaultValue=""
            id="contactName"
            name="contactName"
          />
        </div>

        <div>
          <label htmlFor="contactEmail">Email</label>
          <input
            type="text"
            defaultValue=""
            id="contactEmail"
            name="contactEmail"
          />
        </div>

        <div>
          <label htmlFor="contactTelephone">Telephone</label>
          <input
            type="text"
            defaultValue=""
            id="contactSubject"
            name="contactSubject"
          />
        </div>
        <div>
          <label htmlFor="contactDates">Dates</label>
          <input
            type="text"
            defaultValue=""
            id="contactSubject"
            name="contactSubject"
          />
        </div>
        <div>
          <label htmlFor="contactPackage">Package</label>
          <input
            type="text"
            defaultValue=""
            id="contactSubject"
            name="contactSubject"
          />
        </div>
        <div>
          <label htmlFor="contactMessage">Message</label>
          <textarea id="contactMessage" name="contactMessage"></textarea>
        </div>

        <div>
          <button className="submit">Submit</button>
          <span id="image-loader">
            <img alt="" src="images/loader.gif" />
          </span>
        </div>
      </fieldset>
    </form>

    <div id="message-warning"> Error</div>
    <div id="message-success">
      <i className="fa fa-check"></i>Your message was sent, thank you!
      <br />
    </div>
  </section>
);

export default Booking;
