import FeaturedCards from "./components/FeaturedCards";

var client_id = "dc49ce32b1384268950bd7ad08fcef06";
var client_secret = "dc3d398052a1489392702573cbff763a";

async function getAccessToken(id, secret) {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + new Buffer.from(id + ":" + secret).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();

  return data;
}


export default async function Home() {

  var accessToken = await getAccessToken(client_id, client_secret);

  // console.log(accessToken)
  const response = await fetch(
    "https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken.access_token,
      },
    }
  );

  const data = await response.json();

  console.log(data);

  return (
    <main className="flex flex-col">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ee0979] to-[#ff6a00] pl-12 py-2 w-[40%]">Featured</h1>
      {/* {data.tracks.map(track => (
        <FeaturedCards headline={track.name} />
      ))} */}
    </main>
  )
}
