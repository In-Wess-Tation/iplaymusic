
import { useContext } from "react";
import Link from "next/link";
import TokenContext from "@/app/contexts/TokenContext";

const getAlbums = async (token) => {
  
  const result = await fetch(
      "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc", {
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
  console.log(albums)

    return ( 
        <article className="w-full h-40">
          <div className="flex w-screen h-40 gap-5">
          {albums.albums.map(item => (
           <Link key={item.id} href={`/albums/${item.id}`}>
              <img className="w-[200%] h-[100%] min-w-[200%] pr-[10rem]" src={item.images[0].url} alt="Album picture" />
            </Link>
           ))}
           </div>
        </article>
     );
}
 
export default FeaturedAlbums;