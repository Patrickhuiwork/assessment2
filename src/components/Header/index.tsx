import React from 'react'
import classes from './Header.module.css'

export default function Header() {
  return (
    <header className={classes.header}>
        <img src="/images/logo2.svg" alt="MoodBrew" className={classes.logo}/>
        <div className={classes.headersection}>
          <div className={classes.links}>
            <p className={classes.link}>Contact</p>
            <p className={classes.link}>About</p>
            <p className={classes.link}>Products</p>
          </div>
          <button className={classes.signup}>
              Sign Up
          </button>
        </div>
        <div className={classes.headersectionmobile}>
          <img src="/images/hamburger.svg" alt="Hamburger" className={classes.hamburger}/>
        </div>
    </header>
  )
}
