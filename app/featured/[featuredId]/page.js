"use client"
import PlaySong from "@/app/components/PlaySong"
import TokenContext from "@/app/contexts/TokenContext"
import { useContext } from "react"

const getFeatured = async (token, featuredId) => {

    const result = await fetch(
        `https://api.spotify.com/v1/playlists/${featuredId}`, {
        headers: {
            Authorization: "Bearer " + token.access_token,
        }
    })
    // console.log(await result)
    if (!result.ok) { throw new Error("Failed to fetch playlists") }
    return await result.json()

}

const FeaturedDetail = async ({ params: { featuredId } }) => {

    const [token] = useContext(TokenContext)

    const featured = await getFeatured(token, featuredId)
    console.log(featured)

    return (
        <main className="grid">
            {featured && (
                <>
                    <div className="w-full h-[25rem] relative bg-black">
                        <img src={featured.images[0].url} alt="" className="w-full h-full absolute object-cover opacity-75" />
                    </div>
                    <div className="absolute pt-7 px-7">
                        <h1 className=" text-2xl font-medium text-white drop-shadow">{featured.name}</h1>
                        <p className="text-white text-xs drop-shadow">Playlists by <span className="underline">{featured.owner.display_name}</span></p>
                    </div>
                    <h2 className="font-semibold pt-6 px-4">All Songs</h2>
                </>
            )}
            <article className="grid gap-y-8 pb-24 my-4">
                {featured.tracks.items.map(item => (
                    <PlaySong song={item.track.name} artist={item.track.artists[0].name} time={Math.floor(item.track.duration_ms / 1000 / 60) % 60 + ":" + (Math.floor(item.track.duration_ms / 1000) % 60).toString().padStart(2, "0")} />

                ))}
            </article>
        </main>
    );
}

export default FeaturedDetail;