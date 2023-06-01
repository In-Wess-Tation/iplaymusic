import { AiFillForward, AiFillStepBackward, AiFillStepForward, AiOutlineBackward } from "react-icons/ai";
import { BsFillVinylFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa"

const Player = () => {
    return (
        <main>
            <article>
                <BsFillVinylFill />
            </article>
            <article className="flex gap-x-4 justify-center">
                <AiFillStepBackward className="text-4xl text-pink-yyyy" />
                <AiOutlineBackward className="text-4xl" />
                <button className="bg-gradient-to-t from-pink-yyyy to-orange p-4 rounded-full flex justify-center items-center relative bottom-2">
                    <FaPlay className="text-4xl text-white " />
                </button>
                <AiFillForward className="text-4xl" />
                <AiFillStepForward className="text-4xl text-pink-yyyy " />
            </article>
        </main>
    );
}

export default Player;