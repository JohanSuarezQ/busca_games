import { useEffect, useState } from "react";
import axios from "axios";

export const useSearchFetch = () => {
  const [state, setState] = useState([]);
  const quera = localStorage.getItem("query");

  const searchI = `search ${quera};`;

  useEffect(() => {
    axios({
      url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        "Accept": "application/json",
        "user-key": "3675a446bba75463e0c389758b48cfdd",
      },
      data: `${searchI} fields name, cover.image_id, rating, genres.name;limit 10;`,
    })
      .then((response) => {
        const datos = response.data;
        setState(datos);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return state;
};
