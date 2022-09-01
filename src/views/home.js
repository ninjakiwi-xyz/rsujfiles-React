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
      <h1 className="home-text">Хранилище файлов группы</h1>
      <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle">
          <span className="home-text1">
            <span className="home-text2">предпринимательское право</span>
            <br></br>
          </span>
          <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
          <li data-thq="thq-dropdown" className="home-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle1"
            >
              <a
                href='https://op.raj.ru/pdf/kirpichev_kondratiev_17.pdf" target="_blank'
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                Ссылка на курс лекций
              </a>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle2"
            >
              <a
                href="https://github.com/ninjakiwi-xyz/rsuj_files/raw/gh-pages/Agarkov_M_M_Tsennost_chastnogo_prava.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="home-text4"
              >
                Скачать &quot;Агарков М.М. &quot;Ценность частного права&quot;
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
