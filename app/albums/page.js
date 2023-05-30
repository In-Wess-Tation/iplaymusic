"use client"

// access_token = BQC5IdkdrHg9_rjEPO2iPMUifR7-idmbC6al9GXl7zmFN3SmJy1KJgMTo2rvH8YmG8kQXospSDGMZ2_IHnIKUM7falo7kTGE_i3gqOjA8N251V59_WF3

import { useContext } from "react";
import HeadlinePage from "../components/HeadlinePage";
import TokenContext from "../contexts/TokenContext";
import Link from "next/link";
import FeaturedAlbums from "../components/albums/Featured";

const getAlbums = async (token) => {
  
  const result = await fetch(
    "https://api.spotify.com/v1/browse/new-releases", {
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
  
  
  
  const Albums = async () => {

    const [token] = useContext(TokenContext)
    
    const albums = await getAlbums(token);
    // console.log(albums)

  return (
    <main className="p-5">
      <HeadlinePage headline={"All Albums"} />
      <section className="pb-24">
        <div className="flex justify-between py-5">
          <h2 className="font-bold">Featured Albums</h2>
          <p className="text-pink-yyyy">View All</p>
        </div>

        <div className="overflow-x-scroll no-scrollbar">
          <FeaturedAlbums /> 
        </div>


        <div className="flex justify-between py-5">
          <h2 className="font-bold">New Releases</h2>
          <p className="text-pink-yyyy">View All</p>
        </div>


        <article>
        {albums.albums.items.map(item => (
            <Link key={item.id} className="grid grid-cols-[50px_minmax(260px,_1fr)_200px] pb-5 gap-5 md:grid-cols-[50px_minmax(700px,_1fr)_200px] lg:grid-cols-[50px_minmax(1300px,_1fr)_200px]" href={`/albums/${item.id}`}>
              <img className="rounded h-12 w-12" src={item.images[0].url} alt="Album picture" />

              <article className="flex justify-between">
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-xs">{item.artists[0].name}</p>
              </div>

              <div>
                <p className="text-xs">{item.total_tracks} Songs</p>
              </div>
              </article>

            </Link>
              ))}
          </article>
      </section>
    </main>
  );
};

export default Albums;
