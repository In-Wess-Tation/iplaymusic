

export async function POST(request) {

    // return new Response('Hello, this is auth!')


    let code = await request.body;
    console.log(code)
    
    try {
        let response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            form: {
                grant_type: "authorization_code",
                code: code,
                redirect_uri: "http://localhost:3000/callback",
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic" + btoa(process.env.NEXT_PUBLIC_CLIENT_ID + ":" + process.env.NEXT_PUBLIC_CLIENT_SECRET),
            },
        })

        return {
            statusCode: 201,
            body: JSON.stringify(response.json()),
        };

    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: "Internal server error...",
        };
    }

}