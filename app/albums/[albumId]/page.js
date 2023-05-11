"use client";
import useAuth from "@/app/hooks/useAuth";
// var client_id = "dc49ce32b1384268950bd7ad08fcef06";
// var client_secret = "dc3d398052a1489392702573cbff763a";

// async function getAccessToken(id, secret) {
//   const response = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization:
//         "Basic " + new Buffer.from(id + ":" + secret).toString("base64"),
//     },
//     body: "grant_type=client_credentials",
//   });

//   const data = await response.json();
  
//   return data;
// }

const getData = async (albumId, data) => {

    // const accessToken = useAuth();
    // console.log(accessToken)

    const result = await fetch(
        `https://api.spotify.com/v1/browse/new-releases/${albumId}`, {
        method: "GET",
             headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: "Bearer " + data.access_token,
          }
    })
    if(!result.ok) { throw new Error("Failed to fetch album")}
    return result.json()


    // const response = await fetch(`https://api.spotify.com/v1/browse/new-releases/${albumId}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + accessToken.access_token,
    //       },
    //     }
    //   );
    // return Result.json()
}
 

const AblumsId = async ({params: {albumId}}) => {

    const {data} = useAuth();
    console.log(data)

      

    const albums = await getData(albumId, data);

    return ( 
        <main>
            <h1>This is album detail</h1>
            {albums.items.map(album => (
            <section>
                <img src={item.images[0].url} alt={item.images[0].url} />
                <h1>{album.name}</h1>
            </section>
            ))}
            
        </main>
     );
}
 
export default AblumsId;