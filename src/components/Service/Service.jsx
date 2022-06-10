import React from "react";
import "./Service.scss";
import SingleService from "./SingleService";
import { AiFillCar } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import { MdConstruction } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Service() {
  const icons = [
    [
      "house",
      <BsFillHouseFill size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, ",
    ],
    [
      "construction",
      <MdConstruction size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, consequatur non veniam odit ",
    ],
    [
      "contract",
      <FaFileContract size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, consequatur",
    ],
    [
      "construction",
      <MdConstruction size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, consequatur non veniam ",
    ],
    [
      "contract",
      <FaFileContract size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, consequatur non veniam ",
    ],
    [
      "construction",
      <MdConstruction size={80} />,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore quis aspernatur ad nam aperiam minus impedit, sit, consequatur non veniam",
    ],
    [
      "contract",
      <FaFileContract size={80} />,
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
          perPage: 3,
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
