import React from "react";
import "./Banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";

import house1 from "../../images/house1.jpg";
import house2 from "../../images/house2.jpg";
import house3 from "../../images/house3.jpg";
import house4 from "../../images/house4.jpg";
import Button from "../Button/Button";
import BannerContent from "../BannerContent/BannerContent";
function Banner() {
  SwiperCore.use([Autoplay]);

  return (
    <div className="hero-slide" id='home'>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div
            className="hero"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.3)) ,url(${house1})`,
            }}
          >
            <BannerContent h1Text='Build Your Dream House With Us' buttonText='Order Us'></BannerContent>
          </div>
          {/* <img src={house1}></img> */}
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url(${house2})`,
            }}
          >
                        <BannerContent h1Text='We Have Special Discount' buttonText='Contact Us'></BannerContent>

          </div>
          {/* <img src={house2}></img> */}
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${house3})`,
            }}
          >
                        <BannerContent h1Text='Build Your Dream House With Us' buttonText='Order Us'></BannerContent>

          </div>
          {/* <img src={house3}></img> */}
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url(${house4})`,
            }}
          >
                                    <BannerContent h1Text='We have special descount' buttonText='Contact Us'></BannerContent>

          </div>
          {/* <img src={house4}></img> */}
        </SwiperSlide>
      </Swiper>
      {/* <img src={img1}></img> */}
    </div>
  );
}

export default Banner;
