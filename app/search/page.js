"use client";

import React, { useContext, useState } from 'react'
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
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
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
        <main className='pb-20'>
            <div className="flex gap-x-10 justify-center">
                <input
                    className="bg-transparent p-1 border-b-2 border-pink-yyyy placeholder:text-black placeholder:dark:text-white w-56 outline-none hover:placeholder:text-neutral-700 dark:placeholder:hover:text-neutral-300 transition-all"
                    type="text"
                    placeholder="Search By Artist Name ..."
                    onChange={(e) => { setSearchKey(e.target.value) }}

                />
                {/* <button onClick={searchArtist} className='border-2 text-pink-yyyy border-pink-yyyy bg-transparent hover:bg-pink-yyyy hover:text-white p-2 rounded transition-all outline-dotted'>Search</button> */}
                <button onClick={searchArtist} className='border-2 text-pink-yyyy border-pink-yyyy bg-transparent hover:bg-pink-yyyy hover:text-white p-2 rounded transition-all'>Search</button>
            </div>
            {
                tracks.slice(0, 10).map(track => (
                    <div className='p-3 my-4' key={track.id}>
                        <PlaySong song={track.name} time={Math.floor(track.duration_ms / 1000 / 60) % 60 + ":" + (Math.floor(track.duration_ms / 1000) % 60).toString().padStart(2, "0")} artist={track?.artists[0]?.name}/>
                    </div>
                ))
            }
        </main>
    )
}

export default Searcher



