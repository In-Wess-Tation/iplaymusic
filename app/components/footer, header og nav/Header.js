import { IoIosArrowBack } from "react-icons/io"
import { AiOutlineSearch } from "react-icons/ai"
import Link from "next/link";

const Header = ({ headline }) => {
    return (
        <header className="flex justify-between m-4">
            {/* <header className="flex justify-between w-full h-20 p-5 bg-transparent top-0 fixed"> */}
            <Link href={"/featured"}><IoIosArrowBack className="text-xl" /></Link>
            <h1 className="capitalize">Music</h1>
            <Link href={"/"}><AiOutlineSearch className="text-xl" /></Link>
        </header>
    );
}

export default Header;