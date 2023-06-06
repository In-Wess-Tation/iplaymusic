"use client";

import PlaySong from "@/app/components/PlaySong";
import TokenContext from "@/app/contexts/TokenContext";
import { useContext } from "react";

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
  if (!result.ok) { throw new Error("Failed to fetch albums") }
  return await result.json()

}


const AlbumsId = async ({ params: { albumId } }) => {

  const [token] = useContext(TokenContext)

  const albums = await getAlbumsId(token, albumId);
  console.log(albums)


  return (
    <main>
      <section className="">
        <div>
          <img src={albums.images[0].url} alt={albums.name} />
        </div>
        <article className="p-5 leading-10">
          <div>
            <h1 className="text-2xl font-bold">{albums.name}</h1>
            {albums.artists.map(artist => (
              <p>{artist.name}</p>
            ))}
            <p className="text-sm py-2"><span className="font-semibold">Songs: </span>{albums.total_tracks}</p>
          </div>

        </article>

      </section >


      <section>

        <article className="grid gap-y-8 pb-20 my-4">
          {albums.tracks.items.map(track => (
            <PlaySong key={track.id} song={track.name} artist={track.artists[0].name} time={Math.floor(track.duration_ms / 1000 / 60) % 60 + ":" + (Math.floor(track.duration_ms / 1000) % 60).toString().padStart(2, "0")} />
          ))}
          <p className="opacity-40 text-sm mx-4">Released: {albums.release_date}</p>
        </article>
      </section>

    </main>
  );
}

export default AlbumsId;