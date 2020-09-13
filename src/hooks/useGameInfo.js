import { useEffect, useState } from "react"
import axios from "axios";

export const useGameInfo = ( ) => {
    
    const [state, setState] = useState({ datos: null, loading: true, error:null});
    const gameId = localStorage.getItem('gameId')
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
            data: `where id=${gameId};fields name, videos.video_id,summary, cover.image_id,first_release_date,platforms.name,genres.name,game_modes.name, involved_companies.company.name,websites.url;`
          })
            .then(response => {
                const datos = response.data
                setState({
                    loading: false,
                    error: null, 
                    datos
                })

            })
            .catch(err => {
                console.error(err);
            });

    }, [])

    return state;
}
