import React from 'react'
import classes from './About.module.css'

export default function About() {
  return (
    <div className={classes.main}>
        <div className={classes.container}>
            <h1 className={classes.title}>About Us</h1>
            <p className={classes.paragraph}>MoodBrew was created in order to foster a sense of well-being and mindfulness in our community. Through a meticulous selection process, we source the finest organic ingredients to create blends that not only tantalize the taste buds but also nurture the body and soul.</p>
            <p className={classes.paragraph}>Join us on this journey towards wellness, one cup at a time.</p>
            <div className={classes.newsletter}>
                <div className={classes.box}>
                    <h3>Join Our News Letter</h3>
                    <form>
                        <input type="email" placeholder="Email" className={classes.email}/>
                        <button type="submit" className={classes.submit}>Get Notified</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
