import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// Components
import Aside from './aside/aside';
import Navigation from './navigation/navigation';
// Styles
import '../styles/base.scss';
import './layout.scss';
// Assets
import favicon from '../favicon.ico';

import '../fonts/fonts.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'google-site-verification', content: 'fk98-qUZdasBo6cA_JJbKfVbkLbPTV6pFmK6XZFih0E' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="site">
          <Aside />
          <main className="site__content">
            <Navigation />
            <div className="content">
              {children}
            </div>
          </main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
