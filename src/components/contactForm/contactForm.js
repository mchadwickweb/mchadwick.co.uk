import React from 'react';

const ContactForm = () => (
  <form name="contact" method="POST" netlify>
    <p>
      <label>
        <span>Your Name</span>
        <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        <span>Your Email</span>
        <input type="email" name="email" />
      </label>
    </p>
    <p>
      <label>
        <span>Message</span>
        <textarea name="message"></textarea>
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
);

export default ContactForm;