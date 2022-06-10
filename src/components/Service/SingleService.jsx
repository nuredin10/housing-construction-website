import React from 'react'
import './Service.scss'

function SingleService({title, icon, text}) {
  return (
    <div className='single-service'>
        {icon}
        {/* <Icon></Icon> */}
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default SingleService