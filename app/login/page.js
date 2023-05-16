import Link from "next/link";


const Login = () => {

    const id = process.env.NEXT_PUBLIC_CLIENT_ID;
    console.log("et eller andet", id)

    return ( 
        <main className="text-center">
            <Link href={`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/callback`}
            className="text-2xl"
            >Log in with Spotify</Link>
        </main>
     );
}
 
export default Login;