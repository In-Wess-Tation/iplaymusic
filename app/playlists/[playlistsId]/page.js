"use client"
import PlaySong from "@/app/components/PlaySong"
import TokenContext from "@/app/contexts/TokenContext"
import { useContext } from "react"

const getPlaylists = async (token, playlistsId) => {

    const result = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistsId}`, {
        headers: {
            Authorization: "Bearer " + token.access_token,
        }
    })
    // console.log(await result)
    if (!result.ok) { throw new Error("Failed to fetch playlists") }
    return await result.json()

}

const PlaylistsDetail = async ({ params: { playlistsId } }) => {

    const [token] = useContext(TokenContext)

    const details = await getPlaylists(token, playlistsId)
    console.log(details)

    return (
        <main className="grid">
            {details && (
                <>
                    <div className="w-full h-[27rem] relative bg-black">
                        <img src={details.images[0].url} alt="" className="w-full h-full absolute object-cover opacity-75" />
                    </div>
                    <h1 className="px-6 py-12 text-2xl font-medium absolute text-white">{details.name}</h1>
                    <h2 className="font-semibold pt-6 px-4">All Songs</h2>
                </>
            )}
            <article className="grid gap-y-8 my-10">
                {/* {details.tracks.items[0].map(item => (
                    <PlaySong song={item.track.name} />
                    // <p className="text-pink-yyyy">{item.name}</p>
                ))} */}
            </article>
        </main>
    );
}

export default PlaylistsDetail;