import React from "react";

const Booking = () => (
  <section id="booking">
    <h1>Booking</h1>
    <form action="" method="post" id="contactForm" name="contactForm">
      <fieldset>
        <div>
          <label htmlFor="contactName">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            defaultValue=""
            size="35"
            id="contactName"
            name="contactName"
          />
        </div>

        <div>
          <label htmlFor="contactEmail">
            Email <span className="required">*</span>
          </label>
          <input
            type="text"
            defaultValue=""
            size="35"
            id="contactEmail"
            name="contactEmail"
          />
        </div>

        <div>
          <label htmlFor="contactSubject">Subject</label>
          <input
            type="text"
            defaultValue=""
            size="35"
            id="contactSubject"
            name="contactSubject"
          />
        </div>

        <div>
          <label htmlFor="contactMessage">
            Message <span className="required">*</span>
          </label>
          <textarea
            cols="50"
            rows="15"
            id="contactMessage"
            name="contactMessage"
          ></textarea>
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
