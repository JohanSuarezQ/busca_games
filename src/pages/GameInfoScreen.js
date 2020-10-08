import React from "react";
import ReactPlayer from "react-player";
import NoCoverImage from "../assets/NoCoverImage.svg";
import { Loading } from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

export const GameInfoScreen = () => {
  const gameId = localStorage.getItem("gameId");
  const { datos, loading } = useFetch(
    `where id=${gameId};fields name, videos.video_id,summary, cover.image_id,first_release_date,platforms.name,genres.name,game_modes.name, involved_companies.company.name,websites.url;`
  );
  const dateConverted = (converDate) => {
    const date = new Date(converDate * 1000).toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return date;
  };
  // const unixTime = first_release_date;
  // //   const imgSize = 'cover_small'
  //   const imgSize = 'screenshot_med'
  //   const imgSize = "cover_big";
  //   const imgSize = 'logo_med'
  //   const imgSize = 'screenshot_big'
  //   const imgSize = 'screenshot_huge'
  const imgSize = "720p";
  //  const imgSize = '1080p'

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="gameInfo__container">
          <h1>{datos[0].name}</h1>
          <div className="gameInfo__left-side">
            {datos[0].videos !== undefined ? (
              <ReactPlayer
                className="gameInfo__video"
                controls
                width="100%"
                url={`https://youtu.be/${datos[0].videos[0].video_id}`}
              />
            ) : (
              <p>No hay videos disponibles de este juego</p>
            )}

            <h2>Acerca de {datos[0].name}</h2>
            <hr />
            <p>{datos[0].summary}</p>
            <div>
              <h3>Websites:</h3>
              <ul>
                {datos[0].websites !== undefined ? (
                  datos[0].websites.map((item) => (
                    <li key={`${item.id}`}>
                      <a href={item.url}>{item.url}.</a>
                    </li>
                  ))
                ) : (
                  <p>Sin websites registrado</p>
                )}
              </ul>
            </div>
          </div>

          <div className="gameInfo__right-side">
            {datos[0].cover === undefined ? (
              <img src={NoCoverImage} alt="" />
            ) : (
              <img
                className="gameInfo__cover"
                src={`https://images.igdb.com/igdb/image/upload/t_${imgSize}/${datos[0].cover.image_id}.jpg`}
                alt=""
              />
            )}
            <div className="gameInfo__details">
              <h3>Fecha de lanzamiento:</h3>
              <p>{dateConverted(datos[0].first_release_date)}</p>
            </div>
            <div className="gameInfo__details">
              <h3>Plataformas:</h3>

              {datos[0].platforms !== undefined ? (
                datos[0].platforms.map((item) => (
                  <p key={`${item.id}`}>{item.name}.</p>
                ))
              ) : (
                <p>Sin plataformas registradas</p>
              )}
            </div>
            <div className="gameInfo__details">
              <h3>Genero:</h3>
              {datos[0].genres !== undefined ? (
                datos[0].genres.map((item) => (
                  <p key={`${item.id}`}>{item.name}</p>
                ))
              ) : (
                <p>Sin género registrado</p>
              )}
            </div>
            <div className="gameInfo__details">
              <h3>Modos de juego:</h3>
              {datos[0].game_modes !== undefined ? (
                datos[0].game_modes.map((item) => (
                  <p key={`${item.id}`}>{item.name}.</p>
                ))
              ) : (
                <p>No se han registrado modos de juego</p>
              )}
            </div>
            <div className="gameInfo__details">
              <h3>Desarrolladores:</h3>

              {datos[0].involved_companies !== undefined ? (
                datos[0].involved_companies.map((item) => (
                  <p key={`${item.id}`}>{item.company.name}.</p>
                ))
              ) : (
                <p>No se han registrado desarrolladores de este juego</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
