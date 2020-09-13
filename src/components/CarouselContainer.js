import React from "react";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
//   DotGroup,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
import { usePopHome } from "../hooks/usePopHome";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

import {
  IoIosArrowRoundForward,
} from "react-icons/io";

export const CarouselContainer = () => {
  const state = usePopHome();

  const imgSize = "cover_big";

  return (
    <>
      <Carousel interval = {5000} fade = {true}>
        {state.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              src={`https://images.igdb.com/igdb/image/upload/t_${imgSize}/${item.cover.image_id}.jpg`}
              alt=""
            />
            <div className = "item-info">
              <h2>{item.name}</h2>
              <p>{item.summary}</p>
              <Link 
                  to="/gamedetails"
                  className="more"
                  onClick={() => {
                    localStorage.setItem("gameId", `${item.id}`);
                  }}
                >
                  Saber más
                  <IoIosArrowRoundForward size="1.5em" />
                </Link>
            </div>
            
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
