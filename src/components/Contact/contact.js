import React from "react";
import './contact.css';
import emailjs from "emailjs-com";

const Contact=() => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_xxx",    
      "template_xxx",    
      e.target,
      "publicKey_xxx"    
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message.");
      }
    );
  }
  
  
  return(
         
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

    

export default Contact;