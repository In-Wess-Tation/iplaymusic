"use client"
import { useContext, useRef, useState } from "react";
import { AiFillForward, AiFillStepBackward, AiFillStepForward, AiOutlineBackward } from "react-icons/ai";
import { BsFillVinylFill } from "react-icons/bs";
import { FaPause, FaPlay } from "react-icons/fa"
import PlayerContext from "../contexts/PlayerContext";

const Player = () => {

    const contextPlayer = useContext(PlayerContext)

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
        <main className="grid justify-items-center self-center gap-y-10">
            <article className="m-10">
                <div className="">
                    <BsFillVinylFill className="text-[60vw] dark:text-neutral-300" />
                </div>
            </article>
            <article>
            </article>
            <article className="flex gap-x-4 justify-center items-center">
                <AiFillStepBackward className="text-4xl text-pink-yyyy" />
                <AiOutlineBackward className="text-4xl" />
                <PlayerContext.Provider value={[playing, setPlaying]}>
                    <button onClick={playing ? pause : play} className="bg-gradient-to-t from-pink-yyyy to-orange w-20 h-20 rounded-full flex justify-center items-center">
                        {playing ? <FaPause className="text-2xl text-white"/> : <FaPlay className="text-2xl text-white" />}
                    </button>
                </PlayerContext.Provider>
                <AiFillForward className="text-4xl" />
                <AiFillStepForward className="text-4xl text-pink-yyyy " />
            </article>
        </main>
    );
}

export default Player;