
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

const FeaturedDetail = () => {
    return ( 
        <main>

        </main>
     );
}
 
export default FeaturedDetail;