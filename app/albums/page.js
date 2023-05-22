"use client";

// access_token = BQC5IdkdrHg9_rjEPO2iPMUifR7-idmbC6al9GXl7zmFN3SmJy1KJgMTo2rvH8YmG8kQXospSDGMZ2_IHnIKUM7falo7kTGE_i3gqOjA8N251V59_WF3

import { useEffect } from "react";

// const getAlbums = async (data) => {
//   const response = await fetch("https://api.spotify.com/v1/browse/new-releases",
//     {
//       headers: {
//         Authorization: data,
//       },
//     }
//   )
// return await response.json()
// }

const getAlbums = async () => {

  
  const result = await fetch(
    "https://api.spotify.com/v1/me/albums", {
      // method: "GET",
      headers: {
        //  Accept: "application/json",
        //  "Content-Type": "application/json",
        Authorization: "Bearer" + token,
      }
    })
    if(!result.ok) {throw new Error("Failed to fetch albums")}
    return await result.json()
    
  }
  
  
  
  const Albums = () => {
    
    useEffect(() => {
      getAlbums().then(result => console.log(result))
    }, []);

 const albums = getAlbums();

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
