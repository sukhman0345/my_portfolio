import React, { useState } from "react";
import "./SubscribeSection.css";
import Footer from "./Footer";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(" Subscribed successfully!");
        setEmail(""); // Clear input
      } else {
        setMessage(` ${data.message}`);
      }
    } catch (error) {
      setMessage(" Failed to subscribe. Please try again later.");
    }

    // Clear message after a few seconds
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <div className="app-container">
      {/* Newsletter Section */}
      <section className="subscribe-section">
        <div className="subscribe-container">
          {/* Left Side: Subscription Text */}
          <div className="subscribe-text">
            <h2>Stay Updated with Our News</h2>
            <p>Subscribe to get the latest updates and offers.</p>
          </div>

          {/* Right Side: Subscription Form */}
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
          {message && <p className="subscribe-message">{message}</p>}
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default SubscribeSection;
