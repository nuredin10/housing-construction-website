import React from "react";
import "./Testimonials.scss";
import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'

function SingleComment({ src, text, name, email }) {
  return (
    <div className="singleComment">
      <img src={src}></img>
      
      <p><ImQuotesLeft color='#6e6a68'/>  {text}   <ImQuotesRight color='#6e6a68'/></p>
      
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  );
}

export default SingleComment;
