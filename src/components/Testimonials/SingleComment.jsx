import React from 'react'
import './Testimonials.scss'

function SingleComment({src,text,name,email}) {
  return (
    <div className='singleComment'>
        <img src={src}></img>
        <p>{text}</p>
        <h2>{name}</h2>
        <h3>{email}</h3>
    </div>
  )
}

export default SingleComment