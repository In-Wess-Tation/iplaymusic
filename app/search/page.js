"use client";

import React, {useContext, useState} from 'react'
import axios from 'axios';
import TokenContext from '../contexts/TokenContext';
import PlaySong from '../components/PlaySong';

function Searcher() {
    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])

    
    const [token] = useContext(TokenContext)
    
    // const songs = Searcher(token);
    // // console.log(albums)
  
 
    
    const searchArtist = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                // 'Content-Type' : "application/json",
                'Authorization': "Bearer " + token.access_token,
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
      
        var artistID = data.artists.items[0].id
        console.log(data)

        var artistTracks = await axios.get(
            `https://api.spotify.com/v1/artists/${artistID}/top-tracks`, {
            headers: {
                Authorization: "Bearer " + token.access_token,
            },
            params: {
                limit: 10,
                market: 'US'
            }
        })

        setTracks(artistTracks.data.tracks);
    }

    return (
      <>
      <div className="flex justify-around">
        <input
          className ="bg-transparent p-1 rounded border-2 border-gray-200" 
          type="text" 
          placeholder="Search By Artist Name ..."
          onChange={(e) => {setSearchKey(e.target.value)}}
          
          />
        <button onClick={searchArtist}>Search</button> 
      </div>
      {
        tracks.slice(0, 5).map(track => (
            <div className='p-3' key={track.id}> 
                <PlaySong song={track.name} time={Math.floor(track.duration_ms / 1000 / 60) % 60 +  ":" + (Math.floor(track.duration_ms / 1000) % 60).toString().padStart(2, "0")}/>
            </div>
        ))
      }
      </> 
    )
}

export default Searcher



