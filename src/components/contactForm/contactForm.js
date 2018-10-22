import React from 'react';

const ContactForm = () => (

  <form name="contact" method="POST" action="/contact/success" data-netlify="true" netlify-honeypot="bot-field">
    <p className="form-item--hidden">
      <label>
        <span>Don’t fill this out if you're human</span>
        <input name="bot-field" />
      </label>
    </p>
    <p className="form-item">
      <label className="form-item__label">
        <span>Your Name</span>
        <input type="text" name="name" />
      </label>
    </p>
    <p className="form-item">
      <label className="form-item__label">
        <span>Your Email</span>
        <input type="email" name="email" />
      </label>
    </p>
    <p className="form-item">
      <label className="form-item__label">
        <span>Message</span>
        <textarea rows="6" name="message"></textarea>
      </label>
    </p>
    <p className="form-item">
      <button type="submit">Send</button>
    </p>
  </form>
);

export default ContactForm;