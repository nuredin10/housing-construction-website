import React from "react";
import Button from "../Button/Button";
import './BannerContent.scss';

function BannerContent({ h1Text, buttonText }) {
  return (
    <div className="banner-content">
      <h1>{h1Text}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis similique cupiditate quibusdam dolorem nobis consequuntur! Quos, omnis. Atque eligendi possimus non distinctio vel vero, sunt itaque doloremque cupiditate harum!</p>
      <Button text={buttonText}></Button>
    </div>
  );
}

export default BannerContent;
