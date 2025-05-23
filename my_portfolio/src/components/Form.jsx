import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      alert(response.data.message);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert(" Error submitting form");
      console.error(error);
    }
  };

  return (
    <section className="get-in-touch-section">
      <div className="contact-image">
        <img src="https://img.freepik.com/free-vector/security-control-cctv-room-interior-with-multiple-monitors-displaying-video-from-surveillance-cameras_33099-1624.jpg?semt=ais_hybrid" alt="Contact Illustration" />
      </div>
      <div className="contact-form">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone No." value={formData.phone} onChange={handleChange} required />
          </div>
          <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
