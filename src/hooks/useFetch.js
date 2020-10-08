import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (data) => {
  const [state, setState] = useState({
    datos: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    axios({
      url: "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": "ewpzrn0d3rkyzc5ob9g639s6bolxwf",
        Authorization: "Bearer erwrceurvv6v9klvpm8bke2x5hk0g6",
      },
      data: data,
    })
      .then((response) => {
        setState({
          datos: response.data,
          loading: false,
          error: null,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [data]);
  return state;
};
