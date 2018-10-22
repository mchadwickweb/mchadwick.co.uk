import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout';

const ContactFormSuccess = () => (
  <Layout>
    <h1>Awesome, thanks for getting in touch!</h1>
    <p>I will get an email letting me know you hit me up. I will do my best to reply as soon as I can. Cheers and speak to you soon!</p>
    <Link to="/">{`< Back to the homepage`}</Link>
  </Layout>
);

export default ContactFormSuccess;
