import { AiFillForward, AiFillStepBackward, AiFillStepForward, AiOutlineBackward } from "react-icons/ai";
import { FaPlay } from "react-icons/fa"

const Player = () => {
    return (
        <main>
            <article className="flex gap-x-4">
                <AiFillStepBackward className="text-4xl" />
                <AiOutlineBackward className="text-4xl" />
                <button className="bg-gradient-to-t from-pink-yyyy to-orange w-16 h-16 rounded-full flex justify-center items-center my-4">
                    <FaPlay className="text-4xl text-white" />
                </button>
                <AiFillForward className="text-4xl" />
                <AiFillStepForward className="text-4xl text-pink-yyyy " />
            </article>
        </main>
    );
}

export default Player;