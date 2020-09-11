import React from "react";
import { useFetch } from "../hooks/useFetch";

import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router-dom";

export const DiscoverScreen = () => {
  const state = useFetch();

  const imgSize = "720p";
  return (
    <section className="discover__container">
      <h1>Descubre</h1>

      <ul className="discover__list">
        {state.map((item) => (
          <Link to="/gamedetails" key={`${item.id}`}>
            <li
              className="discover__list--card"
              onClick={() => {
                localStorage.setItem("gameId", `${item.id}`);
              }}
              key={item.id}
            >
              <img
                className="discover__list--image"
                src={`https://images.igdb.com/igdb/image/upload/t_${imgSize}/${item.cover.image_id}.jpg`}
                alt=""
              />
              <h2 className="discover__list--title">{item.name}</h2>
              <p className="discover__list--genre">{item.genres[0].name}</p>
              <p className="discover__list--pop">
                {(parseFloat(item.rating) / 20).toFixed(2)}
                <GiRoundStar className="star" />
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
