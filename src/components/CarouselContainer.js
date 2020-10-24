import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

import { IoIosArrowRoundForward } from "react-icons/io";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";
import NoCoverImage from '../assets/NoCoverImage.svg'

export const CarouselContainer = () => {
  const { datos, loading } = useFetch(
    "fields name,summary, cover.image_id, total_rating; where platforms = 6; where total_rating >= 80;  where first_release_date >=1593561600;  sort popularity desc;  limit 10;"
  );
  const imgSize = "720p";

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <Carousel interval={5000} fade={true}>
          {datos.map((item) => (
            <Carousel.Item key={item.id}>
              {
                !item.cover ? <img src={NoCoverImage} alt="Carousel Image"/>
                : <img
                src={`https://images.igdb.com/igdb/image/upload/t_${imgSize}/${item.cover.image_id}.jpg`}
                alt="Carousel Image"
              />
              }
              
              <div className="item-info">
                <h2>{item.name}</h2>
                <p>{item.summary}</p>
                <Link
                  to={`/gamedetails/${item.id}`}
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
      )}
    </div>
  );
};
