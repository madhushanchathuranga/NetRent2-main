// src/components/BookingPage.jsx
import React, { useState } from "react";
import "./BookingPage.scss"; // Import the SCSS file

const BookingPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Details:\nDate: ${date}\nTime: ${time}\nName: ${name}\nEmail: ${email}`
    );
  };

  return (
    <div className="booking-page">
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <h2 className="subtitle">Property Appraisal</h2>
          <div className="section1">
            <label>Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="section2">
            <label>Select Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Enter Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
