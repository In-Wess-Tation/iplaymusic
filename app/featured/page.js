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
  if (!result.ok) { throw new Error("Failed to fetch featured") }
  return await result.json()

}

const Featured = async () => {

  const [token] = useContext(TokenContext)

  const featured = await getFeatured(token)
  // console.log(featured)

  return (
    <main className="grid mb-28">
      <HeadlinePage headline={"Featured"} />
      {featured.playlists.items.map(item => (
        <FeaturedCards key={item.id} headline={"hej"} url={item.images[0].url} alt={item.name} />
      ))}
    </main>
  );
}

export default Featured;