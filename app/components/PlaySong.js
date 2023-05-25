import { FaPlay } from "react-icons/fa";


const PlaySong = ({song, artist}) => {
    return ( 
        <article className="flex gap-x-5 mx-4 justify-between">
        <div className="flex gap-x-3">
        <span className="bg-gradient-to-t from-pink-yyyy to-orange w-10 h-10 rounded-full flex justify-center items-center">
            <FaPlay className=""/>
        </span>
        <div>
            <h2>{song}</h2>
            <p>{artist}</p>
        </div>
        </div>
        <p className="py-2.5">3:58</p>
    </article>
     );
}
 
export default PlaySong;