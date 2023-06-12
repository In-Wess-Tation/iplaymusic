"use client"
import { useRef, useState, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Link from "next/link";


const PlaySong = ({ song, artist, time, id }) => {

    const [playing, setPlaying] = useState(false);

    const sound = "./smoke.mp3"

    const audioRef = useRef(new Audio(sound))

    const play = () => {
        setPlaying(true);
        audioRef.current.play();
    }

    const pause = () => {
        setPlaying(false);
        audioRef.current.pause();
    }

    return (
        <article className="flex gap-x-5 mx-4 justify-between">
            <div className="flex gap-x-5">
               
                <button onClick={playing ? pause : play} className="bg-gradient-to-t from-pink-yyyy to-orange w-8 h-8 rounded-full flex justify-center items-center">
                    {playing ? <FaPause className="text-xs text-white"/> : <FaPlay className="text-xs text-white" />}
                </button>

                <Link href={`/player`}>
                    <h2 className="text-sm">{song}</h2>
                    <p className="text-sm">{artist}</p>
                </Link>
            </div>
            <p className="py-0.5 text-sm">{time}</p>
        </article>
    );
}

export default PlaySong;