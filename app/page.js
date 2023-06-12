import Link from "next/link";
import { ImKey } from "react-icons/im"
import { BsPersonCircle } from "react-icons/bs"


export default async function Home() {

    return (
        <main className="dark:bg-pink-yyyy h-[80vh] text-[#341931] dark:text-white grid justify-items-center">
            <Link href={`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&scope=user-read-email user-read-private user-library-read playlist-read-private playlist-read-collaborative streaming &redirect_uri=http://localhost:3000/callback`}

                className="text-2xl py-2">Log in with Spotify</Link>
            <form action="" className="flex flex-col gap-y-5 py-2">
                <label htmlFor="username">Username</label>
                <div className="flex">
                    <input type="text" name="username" id="username" placeholder="Enter your username" className="w-[19.5rem] bg-transparent border-dark-purple dark:border-white border-b-2 placeholder-dark-purple dark:placeholder-white placeholder:text-sm" />
                    <BsPersonCircle className="text-lg relative right-6" />
                </div>
                <label htmlFor="password">Password</label>
                <div className="flex">
                    <input type="password" name="password" id="password" placeholder="Enter your password" className="w-[19.5rem] bg-transparent border-dark-purple dark:border-white border-b-2 placeholder-dark-purple dark:placeholder-white placeholder:text-sm" />
                    <ImKey className="relative right-6" />
                </div>
                <button className="w-[19rem] h-10 border-2 border-dark-purple dark:border-white rounded-full uppercase font-semibold my-4 hover:bg-dark-purple hover:text-white hover:dark:bg-white hover:dark:text-pink-yyyy transition-colors">Log in</button>
            </form>
        </main>
    )
}


