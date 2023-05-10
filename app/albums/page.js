
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

// getAccessToken(client_id, client_secret).then((token) => {
//   console.log(token);
// });

// access_token = BQC5IdkdrHg9_rjEPO2iPMUifR7-idmbC6al9GXl7zmFN3SmJy1KJgMTo2rvH8YmG8kQXospSDGMZ2_IHnIKUM7falo7kTGE_i3gqOjA8N251V59_WF3





const Albums = async () => {
  
  var accessToken = await getAccessToken(client_id, client_secret);

// console.log(accessToken)
  const response = await fetch(
    "https://api.spotify.com/v1/browse/new-releases",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken.access_token,
      },
    }
  );
  // .then((response) => {
  //     console.log(response.json().then(
  //         (data) => { console.log(data) }
  //     ));
  // });

  const data = await response.json();

  console.log(data);

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold text-pink-700">All Albums</h1>
      <section>
        <div className="flex justify-between py-5">
          <h2 className="font-bold">Featured Albums</h2>
          <p className="text-pink-700">View All</p>
        </div>
        <article className="overflow-x-scroll flex">
          {data.albums.items.map(item => (
                        <div >
                            <img className="w-[10rem] h-[10rem]" src={item.images[0].url} alt={item.images[0].url} />
                        </div>
                    ))}
        </article>
        <div className="flex justify-between py-5">
          <h2 className="font-bold">New Releases</h2>
          <p className="text-pink-700">View All</p>
        </div>
        <article className="">
          {data.albums.items.map(item => (
                        <article className="flex">
                            <img className="w-[4rem] h-[4rem] rounded mb-2" src={item.images[0].url} alt="" />

                            <div className="flex w-full justify-between text-sm p-2">
                              <div>
                                <h2>{item.name}</h2>
                                <p>{item.artists[0].name}</p>
                              </div>
                              <div>
                              <p>{item.total_tracks} songs</p>
                              </div>
                            </div>

                        </article>
                    ))}
        </article>
      </section>
    </main>
  );
};

export default Albums;
