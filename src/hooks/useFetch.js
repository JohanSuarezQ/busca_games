import { useEffect, useState } from "react"
import axios from "axios";

export const useFetch = ( ) => {
    
    const [state, setState] = useState([]);

    useEffect(() => {
        
        axios({
            url: '/games',
            method: 'POST',
            credentials: 'include', 
            headers: {
                'Accept': 'application/json',
                'user-key': '3675a446bba75463e0c389758b48cfdd',
            },
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
