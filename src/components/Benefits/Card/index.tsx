import React from 'react'
import classes from './Card.module.css'

export const benefits = [
    {
        title: "Customized Tea Blends",
        description: "Create personalized tea blends tailored to your health needs and preferences.",
        pricing: "$15.00",
        button: "Buy Now",
        src: "benefit.png",
    },
    {
        title: "Expert Health Consultations",
        description: "Schedule one-on-one consultations with our tea health experts for personalized advice and recommendations.",
        pricing: "$19.00/session",
        button: "Book Now",
        src: "benefit.png",
    },
    {
        title: "Monthly Tea Subscription",
        description: "Receive a curated selection of teas every month, handpicked to address different aspects of your health and well-being.",
        pricing: "$29.00/mo",
        button: "Buy Now",
        src: "benefit.png",
    },
]

export default function Card() {
  return (
    <>
      {benefits.map((benefit, index) => (
        <div key={index} className={classes.card}>
          <img src={benefit.src} alt={benefit.title} />
          <div className={classes.content}>
            <h2 className={classes.title}>{benefit.title}</h2>
            <p className={classes.description}>{benefit.description}</p>
            <div className={classes.container}>
              <p className={classes.pricing}>Starting at <b>{benefit.pricing}</b></p>
              <button className={classes.cardbutton}>
                {benefit.button}
              </button>
            </div>
          </div>  
        </div>
      ))}
    </>
  )
}