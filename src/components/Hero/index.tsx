import React from 'react';
import classes from './Hero.module.css';
import Spline from '@splinetool/react-spline';

export default function Hero() {
    return (
        <div className={classes.main}>
            <div className={classes.hero}>
                <div className={classes.heroText}>
                    <h1 className={classes.title}>
                        Find your <span className={classes.highlight}>mood</span>
                    </h1>
                    <h1 className={classes.subtitle}>
                        Search through MoodBrew's vast collection of teas and recipes to find the perfect tea for your mood. 
                    </h1>
                    <button className={classes.signup}>
                        Get Started
                    </button>
                </div>
                <div className={classes.heroImage}>
                    <Spline scene="https://prod.spline.design/ulRkzavVBqc2T9vM/scene.splinecode" className={classes.heroanim}/>
                </div>
            </div>
        </div>
    );
}
