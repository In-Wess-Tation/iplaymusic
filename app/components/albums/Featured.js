
import { useContext } from "react";
import Link from "next/link";
import TokenContext from "@/app/contexts/TokenContext";

const getAlbums = async (token) => {
  
  const result = await fetch(
    "https://api.spotify.com/v1/me/albums", {
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
  


const FeaturedAlbums = async () => {

  const [token] = useContext(TokenContext)
    
  const albums = await getAlbums(token);
  // console.log(albums)

    return ( 
        <article className="w-full h-40">
          <div className="flex w-screen h-40 gap-5">
          {albums.items.map(item => (
           <Link key={item.id} href={`/albums/${item.id}`}>
              <img className="w-[200%] h-[100%] min-w-[200%] pr-[10rem]" src={item.album.images[0].url} alt="Album picture" />
            </Link>
           ))}
           </div>
        </article>
     );
}
 
export default FeaturedAlbums;