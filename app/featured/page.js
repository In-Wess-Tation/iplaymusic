"use client"
import { useContext } from "react";
import FeaturedCards from "../components/FeaturedCards";
import HeadlinePage from "../components/HeadlinePage";
import TokenContext from "../contexts/TokenContext";


const getFeatured = async (token) => {
  
  const result = await fetch(
    "https://api.spotify.com/v1/browse/featured-playlists", {
      // method: "GET",
      headers: {
        //  Accept: "application/json",
        //  "Content-Type": "application/json",
        Authorization: "Bearer " + token.access_token,
        //if you remove .access_token, the 403 error changes into 400 - bad request
      }
    })
    // console.log(await result)
    if(!result.ok) {throw new Error("Failed to fetch featured")}
    return await result.json()
    
  }

const Featured = () => {

  const [token] = useContext(TokenContext)

  const featured = getFeatured(token)
  console.log(featured)

  return (
    <main className="grid">
      <HeadlinePage headline={"Featured"} />
      <FeaturedCards headline={"hej"}/>
    </main>
  );
}

export default Featured;