"use client"
import { useContext } from "react"
import TokenContext from "../contexts/TokenContext"
import PlaySong from "../components/PlaySong"
import Image from "next/image"
import HeadlinePage from "../components/HeadlinePage"
import Link from "next/link"


const getPlaylists = async (token) => {

  const result = await fetch(
    "https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: "Bearer " + token.access_token,
    }
  })
  // console.log(await result)
  if (!result.ok) { throw new Error("Failed to fetch playlists") }
  return await result.json()

}

const Playlists = async () => {

  const [token] = useContext(TokenContext)

  const playlists = await getPlaylists(token)
  console.log(playlists)

  return (
    <main className="grid">
      <HeadlinePage headline={"Playlists"} />
      <article className="grid grid-cols-2 gap-6 m-auto mb-6">
        {playlists.items.map(item => (
          <Link href={`/playlists/${item.id}`} className="w-40 h-40 relative">
            <img key={item.id} src={item.images[0].url} alt="" className="w-40 h-40 absolute " />
          </Link>
        ))}
      </article>
    </main>
  );
}

export default Playlists;

{/* <div className="">
<div className="flex h-40 gap-x-4 justify-between overflow-x-scroll my-5 no-scrollbar mx-6">
  {playlists.items.map(item => (
    <Link href={`/playlists/${item.id}`} className="w-[65%] h-[85%] min-w-[45%] relative">
      <img key={item.id} src={item.images[0].url} alt="" className="w-full h-full absolute " />
    </Link>
  ))}
</div>
</div> */}