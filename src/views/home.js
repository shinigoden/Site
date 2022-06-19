import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Nocturnal Linear Crow</title>
        <meta property="og:title" content="Nocturnal Linear Crow" />
      </Helmet>
      <h1 className="home-text">
        Hello im пряный on discord this is where you can download my mod menus
        and other thing
      </h1>
      <button className="home-button button">Download</button>
      <span className="home-text01">
        <span>|пряный меню|</span>
        <br></br>
        <span>
          this menu is my first menu it has alot of free space(placeholders)
        </span>
      </span>
      <span className="home-text04">
        <span>|Disconnect|</span>
        <br></br>
        <span>|Join Random|</span>
        <br></br>
        <span>|Quit Gtag|</span>
        <br></br>
        <span>|Platforms[Rgb]|</span>
        <br></br>
        <span>|Rgb|</span>
        <br></br>
        <span>|AirStrike|</span>
        <br></br>
        <span></span>
        <br></br>
        <span>|Xray|</span>
        <br></br>
        <span>|LongArms</span>
        <span>|</span>
        <br></br>
        <span>|TP Gun|</span>
        <br></br>
        <span>|No Clip|</span>
        <br></br>
        <br></br>
        <span></span>
        <span>|Platforms[Invis]|</span>
        <br></br>
        <span>|Platforms[Sticky|</span>
      </span>
      <span className="home-text33">
        <span>|Features|</span>
        <br></br>
        <span className="home-text36">&amp;#8203;</span>
      </span>
      <h1 className="home-text37">
        This is a WIP Website not everything is where it needs to be or how
        it&apos;s supposed to look
      </h1>
    </div>
  )
}

export default Home
