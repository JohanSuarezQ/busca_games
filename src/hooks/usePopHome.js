import { useEffect, useState } from "react"
import axios from "axios";

export const usePopHome = ( ) => {
    
    const [state, setState] = useState([]);

    useEffect(() => {
        
        axios({
            url: '/games',
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'user-key': '3675a446bba75463e0c389758b48cfdd',
            },
            data: 'fields name,summary, cover.image_id;sort popularity desc;where rating >= 90;where first_release_date >1577750400 & first_release_date <1598832000;limit 10;'
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
