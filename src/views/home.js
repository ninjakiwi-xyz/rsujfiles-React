import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>rsuj_files</title>
        <meta property="og:title" content="rsuj_files" />
      </Helmet>
    </div>
  )
}

export default Home
