"use client";

import PlaySong from "@/app/components/PlaySong";
import TokenContext from "@/app/contexts/TokenContext";
import { useContext } from "react";

//this is what to use!!!
// const getData = async (albumId, data) => {

//     const accessToken = useAuth();
//     console.log(accessToken)

//     const result = await fetch(
//         `https://api.spotify.com/v1/browse/new-releases/${albumId}`, {
//         method: "GET",
//              headers: {
//              Accept: "application/json",
//              "Content-Type": "application/json",
//              Authorization: data,
//           }
//     })
//     if(!result.ok) { throw new Error("Failed to fetch album")}
//     return result.json()
// }

const getAlbumsId = async (token, albumId) => {
  
    const result = await fetch(
        `https://api.spotify.com/v1/albums/${albumId}`, {
        // method: "GET",
        headers: {
          //  Accept: "application/json",
          //  "Content-Type": "application/json",
          Authorization: "Bearer " + token.access_token,
          //if you remove .access_token, the 403 error changes into 400 - bad request
        }
      })
      // console.log(await result)
      if(!result.ok) {throw new Error("Failed to fetch albums")}
      return await result.json()
      
    }
    

 

const AlbumsId = async ({params: { albumId }}) => {

    
    const [token] = useContext(TokenContext)
    
    const albums = await getAlbumsId(token, albumId);
    console.log(albums)

    return ( 
        <main>
            <section className="pb-10">
                <div>
                <img src={albums.images[0].url} alt="" />
                </div>
                <article className="p-5 leading-10">
                  <div>
                    <h1 className="text-2xl font-bold">{albums.name}</h1>
                    <p className="font-bold">{albums.total_tracks} Songs</p>
                  </div>

                </article>

            </section >

            
            <section>
               
                {albums.tracks.items.map(track => (
                <article key={track.id} className="grid grid-cols-[70px_minmax(300px,_1fr)_200px] pb-5 leading-10">
                    <PlaySong />
                    <div className="flex justify-between">
                      <div>
                        <p className="font-bold">{track.name}</p>
                        <p className="text-xs">{track.artists[0].name}</p>
                      </div>
                      <p className="text-xs">{track.duration_ms}</p>
                    </div>
                </article>
                    ))}
                    
            </section>

        </main>
     );
}
 
export default AlbumsId;