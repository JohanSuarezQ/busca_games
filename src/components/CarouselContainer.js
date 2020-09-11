import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { usePopHome } from "../hooks/usePopHome";
import { Link } from "react-router-dom";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowRoundForward,
} from "react-icons/io";

export const CarouselContainer = () => {
  const state = usePopHome();

  const imgSize = "cover_big";
  return (
    <div className="carousel__container">
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={3.7}
        totalSlides={10}
        isPlaying={true}
        infinite
      >
        <div className="botonera">
          <ButtonBack>
            <IoIosArrowBack className="carousel__buttons" size="2em" />
          </ButtonBack>
          <DotGroup />
          <ButtonNext>
            <IoIosArrowForward className="carousel__buttons" size="2em" />
          </ButtonNext>
        </div>

        <Slider className="container__carousel">
          {state.map((item) => (
            <Slide className="card" key={item.id}>
              <img
                src={`https://images.igdb.com/igdb/image/upload/t_${imgSize}/${item.cover.image_id}.jpg`}
                alt=""
              />
              <div className="info">
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
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
};
