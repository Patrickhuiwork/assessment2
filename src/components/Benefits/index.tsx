import React from 'react'
import classes from './Benefits.module.css'
import Card from './Card'

export default function Benefits() {
  return (
    <div className={classes.main}>
        <div className={classes.herotext}>
            <h1 className={classes.title}>Tea Re-Imagined</h1>
            <h2 className={classes.subtitle}>Moodbrew offers a wide range of services to help you brew your mood!</h2>
        </div>
        <div className={classes.cardsection}>
            <Card/>
        </div>
    </div>
  )
}
