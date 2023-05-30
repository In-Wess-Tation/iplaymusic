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
      <article className="from-pink-yyyy via-orange to-white dark:to-dark-purple ">
        {/* <h1 className="text-4xl font-bold pl-10 py-4">Playlists</h1> */}
        <HeadlinePage headline={"Playlists"} />
        <div className="">
          <div className="flex h-40 gap-x-4 justify-between overflow-x-scroll my-5 no-scrollbar mx-6">
            {playlists.items.map(item => (
              // <Link href={`/playlists/{item.id}`} className="w-40 h-auto relative">
              <img key={item.id} src={item.images[0].url} alt="" className="w-40 h-auto " />
              // </Link>
            ))}
          </div>
        </div>
      </article>
      <article>
        <PlaySong />
      </article>
    </main>
  );
}

export default Playlists;