import React from "react";
import SingleComment from "./SingleComment";
import Hannah from "../../images/hannah.jpeg";
import "./Testimonials.scss";

function Testimonials() {
  const clients = [
    [
      "https://global.penguinrandomhouse.com/wp-content/uploads/2017/05/gshrinagesh1b.jpg",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
      "Hannah John",
      "Ceo of google",
    ],
    [
      "https://global.penguinrandomhouse.com/wp-content/uploads/2020/04/trathnow1b.jpg",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
      "Anthonio Mark",
      "Ceo of facebook",
    ],
    [
      "https://global.penguinrandomhouse.com/wp-content/uploads/2016/02/newmdohle1b.jpg",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
      "Hannah John",
      "Ceo of youtube",
    ],
    [
      "data:image/jpeg;base64,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",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repudiandae earum voluptatum voluptate",
      "Anthonio Mark",
      "Ceo of apple",
    ],
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9ZOOIDM6D5Qf47fzjDngav0gM4Op6hWmfJN5hITdKYrViJEt4zorMTbMCkkj63jjkT8&usqp=CAU",
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
