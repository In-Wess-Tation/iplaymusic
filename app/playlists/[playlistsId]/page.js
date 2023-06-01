"use client"
import PlaySong from "@/app/components/PlaySong"
import TokenContext from "@/app/contexts/TokenContext"
import Link from "next/link"
import { useContext } from "react"
import { FaPlay } from "react-icons/fa"

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
                    <div className="w-full h-[25rem] relative bg-black">
                        <img src={details.images[0].url} alt={details.name} className="w-full h-full absolute object-cover opacity-75" />
                    </div>
                    <div className="absolute pt-7 px-7">
                        <h1 className=" text-2xl font-medium text-white drop-shadow">{details.name}</h1>
                        <p className="text-white text-xs drop-shadow">Playlists by <span className="underline">{details.owner.display_name}</span></p>
                    </div>
                    <div className="pt-6 px-4">
                        {/* <button className="bg-gradient-to-t from-pink-yyyy to-orange w-12 h-12 rounded-full flex justify-center items-center my-4">
                            <FaPlay className="text-white" />
                        </button> */}
                        <h2 className="font-semibold ">All Songs</h2>
                        <p className="text-sm"><span className="font-semibold">Songs: </span>{details.tracks.total}</p>
                    </div>
                </>
            )}
            <article className="grid gap-y-8 pb-24 my-4 ">
                {details?.tracks?.items?.map(item => (
                    <PlaySong song={item?.track?.name} artist={item?.track?.artists[0]?.name} time={Math.floor(item?.track?.duration_ms / 1000 / 60) % 60 + ":" + (Math.floor(item?.track?.duration_ms / 1000) % 60).toString().padStart(2, "0")} />

                ))}
            </article>
        </main>
    );
}

export default PlaylistsDetail;