"use client"
import { useContext } from "react";
import { AiFillForward, AiFillStepBackward, AiFillStepForward, AiOutlineBackward } from "react-icons/ai";
import { BsFillVinylFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa"
import TokenContext from "../contexts/TokenContext";
import ReactAudioPlayer from "react-audio-player";

const Player = () => {

    const [token] = useContext(TokenContext)

    return (
        <main className="grid justify-items-center self-center gap-y-10">
            <article className="m-10">
                <div className="bg-neutral-600 p-2">
                    <BsFillVinylFill className="text-[60vw] text-neutral-500" />
                </div>
            </article>
            <article>
            </article>
            <article className="flex gap-x-4 justify-center items-center">
                <AiFillStepBackward className="text-4xl text-pink-yyyy" />
                <AiOutlineBackward className="text-4xl" />
                <button className="bg-gradient-to-t from-pink-yyyy to-orange p-4 rounded-full flex justify-center items-center">
                <ReactAudioPlayer src="smoke.mp3" autoPlay controls>
                    <FaPlay className="text-4xl text-white " />
                </ReactAudioPlayer>
                </button>
                <AiFillForward className="text-4xl" />
                <AiFillStepForward className="text-4xl text-pink-yyyy " />
            </article>
        </main>
    );
}

export default Player;