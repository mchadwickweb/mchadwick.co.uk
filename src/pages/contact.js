import React from 'react';

import Layout from '../components/layout';
import ContactForm from '../components/contactForm/contactForm';

const Contact = () => (
  <Layout>
    <h1>Contact</h1>
    <p>If you find yourself in need of professional help for your business, charity or organisation. Feel free to contact me using the form below. I will always do my best to help anyone that needs it.</p>
    <ContactForm />
  </Layout>
);

export default Contact;
