// ContactForm.js
import React, { useState } from 'react';
import './contact.css'; // Import your custom CSS file

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Send');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    const { name, email, message } = e.target.elements;
    const formData = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    console.log(formData); // You can handle the form data as needed (e.g., send it to a server)

    // Reset form status after submission
    setTimeout(() => {
      setFormStatus('Send');
    }, 2000);
  };

  return (
    <section>
    <div className="contact-form-container">
      <h2 className="contact-form-title">Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" className="form-control" rows="4" required />
        </div>
        <button className="btn btn-primary" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </section>
  );
};

export default ContactForm;
