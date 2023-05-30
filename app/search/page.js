"use client";

import React, {useContext, useState} from 'react'
import axios from 'axios';
import TokenContext from '../contexts/TokenContext';

function Searcher() {
    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])

    
    const [token] = useContext(TokenContext)
    
    // const songs = Searcher(token);
    // // console.log(albums)
  
 
    
    const searchArtist = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=artist%2Cplaylist%2Calbum%2Ctrack", {
            headers: {
                // 'Content-Type' : "application/json",
                'Authorization': "Bearer" + token.access_token,
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
      
        // var artistID = data.artists.items[0].id
        console.log(data)

        var artistTracks = await axios.get("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks", {
            headers: {
                Authorization: "Bearer" + token.access_token,
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
            <div key={track.id} >
                <ul>
                    <li > {track.name}</li>
                </ul>
            </div>
        ))
      }
      </> 
    )
}

export default Searcher



