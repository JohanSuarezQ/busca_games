import React from "react";
import { SearchInput } from "../components/SearchInput";
import NoCoverImage from "../assets/NoCoverImage.svg";
import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";

export const SearchScreen = () => {
  const searchString = localStorage.getItem("query");
  const { datos, loading } = useFetch(
    `search ${searchString}; fields name, cover.image_id, rating, genres.name;limit 20;`
  );
  const imgSize = "cover_big";
  return (
    <div className="search-screen-container">
      <SearchInput />
      {loading === true ? (
        <Loading />
      ) : datos.length === 0 ? (
        <h3 className="matches-title">
          No hay coincidencias para {searchString}{" "}
        </h3>
      ) : (
        <>
          <section className="discover__container">
            <h3 className="search__title">Coincidencias para {searchString}</h3>
            <ul className="discover__list">
              {datos.map((item) => (
                <Link key={`${item.id}`} to={`/gamedetails/${item.id}`}>
                  <li
                    className="discover__list--card"
                    onClick={() => {
                      localStorage.setItem("gameId", `${item.id}`);
                    }}
                    key={item.id}
                  >
                    {item.cover === undefined ? (
                      <img
                        className="discover__list--image"
                        src={NoCoverImage}
                        alt=""
                      />
                    ) : (
                      <img
                        className="discover__list--image"
                        src={`https://images.igdb.com/igdb/image/upload/t_${imgSize}/${item.cover.image_id}.jpg`}
                        alt=""
                      />
                    )}
                    <h2 className="discover__list--title">{item.name}</h2>
                    {item.genres === undefined ? (
                      (item.genres = (
                        <p className="discover__list--genre">
                          Sin género registrado
                        </p>
                      ))
                    ) : (
                      <p className="discover__list--genre">
                        {item.genres[0].name}
                      </p>
                    )}

                    {item.rating === undefined ? (
                      (item.rating = (
                        <p className="discover__list--pop">Aún no calificado</p>
                      ))
                    ) : (
                      <p className="discover__list--pop">
                        {(parseFloat(item.rating) / 20).toFixed(2)}
                        <GiRoundStar className="star" />
                      </p>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
};
