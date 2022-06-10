import React, { useState } from "react";
import "./Header.scss";

function Header() {

    const [isActive, setIsActive] = useState(false);
    const [navbar,  setNavbar] = useState(false);
    const [toggle, setToggle] = useState(false);

    const navSlide = () =>{
        setIsActive( !isActive )
        setToggle(!toggle)
        console.log(isActive)
    }

    const changeNavbar = () =>{
        if(window.scrollY>=80){
          setNavbar(true)
        }
        else{
          setNavbar(false)
        }
    }
    
    window.addEventListener('scroll',changeNavbar);
  return (
    <div className="header">
      <nav className={navbar ? 'navbar' : ''}>
        <h4 className="logo">
          {/* <a href="#" > */}
            Nuredin
          {/* </a> */}
        </h4>

        <ul className={`nav-links ${isActive === true ?'nav-active' : ''}` }>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <div className={`burger ${toggle ? 'toggle' : ''}`} onClick={navSlide}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
