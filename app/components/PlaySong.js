"use client"
import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";


const PlaySong = ({ song, artist, time, id }) => {

    return (
        <article className="flex gap-x-5 mx-4 justify-between">
            <div className="flex gap-x-5">
                <button className="bg-gradient-to-t from-pink-yyyy to-orange w-8 h-8 rounded-full flex justify-center items-center">
                    <FaPlay className="text-xs text-white" />
                </button>
                <div>
                    <h2 className="text-sm">{song}</h2>
                    <p className="text-sm">{artist}</p>
                </div>
            </div>
            <p className="py-0.5 text-sm">{time}</p>
        </article>
    );
}

export default PlaySong;