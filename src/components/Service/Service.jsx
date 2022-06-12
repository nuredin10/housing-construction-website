import React, { useState, useEffect } from "react";
import "./Service.scss";
import SingleService from "./SingleService";
import { AiFillCar } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import { MdConstruction } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Service() {
  const [numberOfContent, setNumberOfContent] = useState(3)

  const handleResize = () => {
    if (window.innerWidth < 720) {
        setNumberOfContent(1)
    } else {
        setNumberOfContent(3)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  const icons = [
    [
      "House",
      <BsFillHouseFill size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, ",
    ],
    [
      "Construction",
      <MdConstruction size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, consequatur non veniam odit ",
    ],
    [
      "Trust",
      <VscWorkspaceTrusted size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, consequatur",
    ],
    [
      "Contract",
      <MdConstruction size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, consequatur non veniam ",
    ],
    [
      "House",
      <BsFillHouseFill size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, consequatur non veniam ",
    ],
    [
      "Construction",
      <MdConstruction size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, consequatur non veniam",
    ],
    [
      "Trust",
      <VscWorkspaceTrusted size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, consequatur non veniam ",
    ],
  ];
  return (
    <div className="service" id="service">
      <h1>Service</h1>
      <p>We provide the best service for our customers</p>

      <Splide
        options={{
            autoplay: true,
          perPage: numberOfContent,
          arrows: false,
          pagination: true,
          drag: "free",
          gap: "1rem",
        }}
      >
        {icons.map((e) => {
          return (
              
            <SplideSlide>
              <SingleService
                title={e[0]}
                icon={e[1]}
                text={e[2]}
              ></SingleService>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Service;
