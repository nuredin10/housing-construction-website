import React from 'react'
import './About.scss'
import img1 from '../../images/6346980.jpg'

function About() {
  return (
    <div className='about-section' id='about'>
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam vero aliquid alias ab odio saepe aperiam eveniet perspiciatis, doloremque praesentium explicabo dolores voluptatem ut natus fugit, aliquam aut similique?</p>
      <img src={img1}></img>
    </div>
  )
}

export default About