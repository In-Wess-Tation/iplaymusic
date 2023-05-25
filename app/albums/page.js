"use client"

// access_token = BQC5IdkdrHg9_rjEPO2iPMUifR7-idmbC6al9GXl7zmFN3SmJy1KJgMTo2rvH8YmG8kQXospSDGMZ2_IHnIKUM7falo7kTGE_i3gqOjA8N251V59_WF3

import { useContext, useEffect } from "react";
import HeadlinePage from "../components/HeadlinePage";
import TokenContext from "../contexts/TokenContext";

const getAlbums = async (token) => {

  
  const result = await fetch(
    "https://api.spotify.com/v1/me/albums", {
      // method: "GET",
      headers: {
        //  Accept: "application/json",
        //  "Content-Type": "application/json",
        Authorization: "Bearer " + token.access_token,
      }
    })
    if(!result.ok) {throw new Error("Failed to fetch albums")}
    return await result.json()
    
  }
  
  
  
  const Albums = () => {

    const [token] = useContext(TokenContext)
    
    const albums = getAlbums(token);
    console.log(albums)

  return (
    <main className="p-5">
      <HeadlinePage headline={"All Albums"} />
      <section>
        <div className="flex justify-between py-5">
          <h2 className="font-bold">Featured Albums</h2>
          <p className="text-pink">View All</p>
        </div>
        {/* {albums.items.map(album => (
          <article>
            <img src={album.images.url} alt={album.images.url} />
          </article>
        ))} */}


        <div className="flex justify-between py-5">
          <h2 className="font-bold">New Releases</h2>
          <p className="text-pink">View All</p>
        </div>

      </section>
    </main>
  );
};

export default Albums;
