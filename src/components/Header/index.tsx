import React from 'react'
import classes from './Header.module.css'

export default function Header() {
  return (
    <header className={classes.header}>
        <img src="/images/logo.svg" alt="MoodBrew" className={classes.logo}/>
        <button className={classes.signup}>
            Sign Up
        </button>
    </header>
  )
}
