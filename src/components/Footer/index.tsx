import React from 'react'
import classes from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={classes.footer}>
        <div className={classes.footercontent}>
            <img src="/images/logo2.svg" alt="MoodBrew" className={classes.logo}/>
            <div className={classes.footersection}>
                <p className={classes.link}>Contact</p>
                <p className={classes.link}>About</p>
                <p className={classes.link}>Products</p>
            </div>
        </div>
        <p className={classes.border}>© MoodBrew</p>
    </footer>
  )
}