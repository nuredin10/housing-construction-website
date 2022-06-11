import React from "react";
import SingleComment from "./SingleComment";
import Hannah from "../../images/hannah.jpeg";
import "./Testimonials.scss";

function Testimonials() {
  const clients = [
    [
      Hannah,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
      "Hannah John",
      "Ceo of google",
    ],
    [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
      "Anthonio Mark",
      "Ceo of facebook",
    ],
    [
      Hannah,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
      "Hannah John",
      "Ceo of youtube",
    ],
    [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
      "Anthonio Mark",
      "Ceo of apple",
    ],
    [
      Hannah,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
      "Hannah John",
      "Ceo of ethio telecom",
    ],
    [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
      "Anthonio Mark",
      "Ceo of Safari Com",
    ],
    // [
    //   Hannah,
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
    //   "Hannah John",
    //   "hannah@gmail.com",
    // ],
    // [
    //   Hannah,
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
    //   "Hannah John",
    //   "hannah@gmail.com",
    // ],
    // [
    //   Hannah,
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
    //   "Hannah John",
    //   "hannah@gmail.com",
    // ],
  ];

  return (
    <div className="testimonals" id="testimonials">
      <h1>Testimonials</h1>
      <p>What Our Clients Say About Us</p>
      <div className="comments">
      {clients.map((e) => {
        return (
            <SingleComment src={e[0]} text={e[1]} name={e[2]} email={e[3]} />
        );
      })}
      </div>    
    </div>
  );
}

export default Testimonials;
