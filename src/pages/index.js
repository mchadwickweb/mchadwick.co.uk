import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="intro">
      <h1>Hey, my name is Michael Chadwick. I am a senior front-end developer based in Manchester.</h1>
      <p>I have spent the past 6+ years working with clients such as National Grid, Autovista Group, WaterAid and Co-op Insurance to build awesome and accessible front-ends to large scale Drupal applications and websites. I love tech and seeing it impact people for the better.</p>
      <Link className="button" to="/contact/">Contact me</Link>
    </div>
  </Layout>
)

export default IndexPage
