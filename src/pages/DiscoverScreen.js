import React from "react";
import { useFetch } from "../hooks/useFetch";

import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";

export const DiscoverScreen = () => {
  const { datos, loading } = useFetch(
    "fields name, cover.image_id, rating,genres.name;sort rating desc;where rating >= 90;limit 50;"
  );
  const imgSize = "cover_big";
  return (
    <section className="discover__container">
      <h1>Los 50 con mejor calificación</h1>

      {loading === true ? (
        <Loading />
      ) : (
        <ul className="discover__list">
          {datos.map((item) => (
            <Link to={`/gamedetails/${item.id}`} key={`${item.id}`}>
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
      )}
    </section>
  );
};
