import Link from "next/link";


const Login = () => {

    const id = process.env.NEXT_PUBLIC_CLIENT_ID;
    console.log("et eller andet", id)

    return ( 
        <main>
            <Link href={`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/callback`}
            >Log in med spotify</Link>
        </main>
     );
}
 
export default Login;