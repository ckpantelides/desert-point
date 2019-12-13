import React from "react";
import useBookingForm from "./CustomHooks";

const Booking = () => {
  const signup = () => {
    alert(`Booking request sent
           Name: ${inputs.name}
           Email: ${inputs.email}`);
  };
  const { inputs, handleInputChange, handleSubmit } = useBookingForm(
    { name: "", email: "", telephone: "", dates: "", package: "", message: "" },
    signup
  );

  return (
    <section id="booking">
      <h1>Booking request</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              value={inputs.name}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              required
            />
          </div>

          <div>
            <label htmlFor="telephone">Telephone</label>
            <input
              type="text"
              name="telephone"
              onChange={handleInputChange}
              value={inputs.telephone}
            />
          </div>
          <div>
            <label>Dates</label>
            <input
              type="text"
              name="dates"
              onChange={handleInputChange}
              value={inputs.dates}
            />
          </div>
          <div>
            <label>Package</label>
            <input
              type="text"
              name="package"
              onChange={handleInputChange}
              value={inputs.package}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              onChange={handleInputChange}
              value={inputs.message}
            ></textarea>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Booking;