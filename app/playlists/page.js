import { useContext } from "react"
import TokenContext from "../contexts/TokenContext"
import PlaySong from "../components/PlaySong"


const getPlaylists = async (token) => {
  
  const result = await fetch(
    "https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: "Bearer " + token.access_token,
      }
    })
    // console.log(await result)
    if(!result.ok) {throw new Error("Failed to fetch playlists")}
    return await result.json()
    
  }

const Playlists = async () => {

    // const [token] = useContext(TokenContext)
    // console.log(token)

    // const playlists = await getPlaylists(token)
    // console.log(playlists)


    return ( 
        <main className="grid">
            <article className="from-pink-yyyy via-orange to-white dark:to-dark-purple ">
            <h1 className="text-4xl font-bold pl-10 py-4">Playlists</h1>
            <div className="w-full h-[20rem]">
                <div className="flex w-auto h-40 justify-between overflow-x-scroll my-5 no-scrollbar">
                    <div className="w-[40%] h-40 min-w-[40%] mx-4 bg-black"></div>

                </div>
            </div>
            </article>
            <article>
               <PlaySong song={"Old Town Road"} artist={"Billy Ray Cyrus"}/>
            </article>
        </main>
     );
}
 
export default Playlists;