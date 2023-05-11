import Link from "next/link";

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



const Featured = async () => {
  
  var accessToken = await getAccessToken(client_id, client_secret);

//   console.log(accessToken)
    const response = await fetch(
      "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc",
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
        <section>
              <article className="overflow-x-scroll flex gap-2">
          {data.albums.map(item => (
                        <div>
                          <Link href={`/albums/${item.id}`}>
                            <img className="w-[10rem] h-[10rem]" src={item.images[0].url} alt={item.images[0].url} />
                          </Link>
                        </div>
                    ))}
        </article>
        </section>
     );
}
 
export default Featured;