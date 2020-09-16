import React from "react";
import { useGameInfo } from "../hooks/useGameInfo";
import ReactPlayer from "react-player";
import NoCoverImage from "../assets/NoCoverImage.svg";

export const GameInfo = () => {
  const { loading, datos } = useGameInfo();
  console.log(loading)
  const {
    name,
    platforms,
    first_release_date,
    videos,
    summary,
    cover,
    genres,
    game_modes,
    involved_companies,
    websites,
  } = !!datos && datos[0];

  const unixTime = first_release_date;
  const date = new Date(unixTime * 1000).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  //   const imgSize = 'cover_small'
  //   const imgSize = 'screenshot_med'
  //   const imgSize = "cover_big";
  //   const imgSize = 'logo_med'
  //   const imgSize = 'screenshot_big'
  //   const imgSize = 'screenshot_huge'
     const imgSize = '720p'
  //  const imgSize = '1080p'

  // console.log(id, name, genres)

  return (
    <>
      {loading ? (
        <p>cargando.......</p>
      ) : (
        <div className="gameInfo__container">
          <h1>{name}</h1>
          <div className="gameInfo__left-side">
            {videos !== undefined ? (
              <ReactPlayer
                className="gameInfo__video"
                controls
                width="100%"
                // // height="400px"
                url={`https://youtu.be/${videos[0].video_id}`}
              />
            ) : (
              <p>No hay videos disponibles de este juego</p>
            )}

            <h2>Acerca de {name}</h2>
            <hr />
            <p>{summary}</p>
            <div>
              <h3>Websites:</h3>
              <ul>
                {websites !== undefined ? (
                  websites.map((item) => (
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
            {cover === undefined ? (
              <img src={NoCoverImage} alt="" />
            ) : (
              <img
                className="gameInfo__cover"
                src={`https://images.igdb.com/igdb/image/upload/t_${imgSize}/${cover.image_id}.jpg`}
                alt=""
              />
            )}
            <div className="gameInfo__details">
              <h3>Fecha de lanzamiento:</h3>

              <p>{date}</p>
            </div>
            <div className="gameInfo__details">
              <h3>Plataformas:</h3>

              {platforms !== undefined ? (
                platforms.map((item) => <p key={`${item.id}`}>{item.name}.</p>)
              ) : (
                <p>Sin plataformas registradas</p>
              )}
            </div>
            <div className="gameInfo__details">
              <h3>Genero:</h3>
              {genres !== undefined ? (
                genres.map((item) => <p key={`${item.id}`}>{item.name}</p>)
              ) : (
                <p>Sin género registrado</p>
              )}
            </div>
            <div className="gameInfo__details">
              <h3>Modos de juego:</h3>
              {game_modes !== undefined ? (
                game_modes.map((item) => <p key={`${item.id}`}>{item.name}.</p>)
              ) : (
                <p>No se han registrado modos de juego</p>
              )}
            </div>
            <div className="gameInfo__details">
              <h3>Desarrolladores:</h3>

              {involved_companies !== undefined ? (
                involved_companies.map((item) => (
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
