import { IoIosArrowBack } from "react-icons/io"
import { AiOutlineSearch } from "react-icons/ai"
import Link from "next/link";

const Header = ({headline}) => {
    return ( 
        <header className="flex justify-between m-4">
            <Link href={"/featured"}><IoIosArrowBack className="text-xl"/></Link>
            <h1 className="capitalize">Featured</h1>
            <Link href={"/categories"}><AiOutlineSearch className="text-xl"/></Link>
        </header>
     );
}
 
export default Header;