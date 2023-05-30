"use client"
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

    const detail = await getPlaylists(token, playlistsId)
    console.log(detail)

    return (
        <main>
            hej
        </main>
    );
}

export default PlaylistsDetail;