import { useEffect, useState } from "react"
import axios from "axios";

export const useFetch = ( ) => {
    
    const [state, setState] = useState([]);

    useEffect(() => {
        
        axios({
            url: 'https://api-v3.igdb.com/games',
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'user-key': '3675a446bba75463e0c389758b48cfdd',
            },
            withCredentials: true,
            credentials: 'same-origin',
            data: 'fields name, cover.image_id, rating,genres.name;sort popularity desc;where rating >= 90;limit 50;'
          })
            .then(response => {
                const datos = response.data
                setState(datos)
            })
            .catch(err => {
                console.error(err);
            });

    }, [])

    return state;
}
