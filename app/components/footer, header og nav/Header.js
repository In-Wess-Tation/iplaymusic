"use client"
import { IoIosArrowBack } from "react-icons/io"
import { AiOutlineSearch } from "react-icons/ai"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ headline }) => {

    const pathname = usePathname()
    const finalSlashIndex = pathname.lastIndexOf('/')
    const previousPath = pathname.slice(0, finalSlashIndex)

    return (
        <header className="flex justify-between m-4">
            {/* <header className="flex justify-between w-full h-14 p-4 bg-transparent top-0 sticky z-50"> */}
            <Link href={previousPath}><IoIosArrowBack className="text-xl" /></Link>
            <h1 className="capitalize">Music</h1>
            <Link href={"/search"}><AiOutlineSearch className="text-xl" /></Link>
        </header>
    );
}

export default Header;