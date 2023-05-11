import { IoIosArrowBack } from "react-icons/io"
import { AiOutlineSearch } from "react-icons/ai"

const Header = ({headline}) => {
    return ( 
        <header className="flex justify-between m-4">
            <IoIosArrowBack className="text-xl"/>
            <h1 className="capitalize">Featured</h1>
            <AiOutlineSearch className="text-xl"/>
        </header>
     );
}
 
export default Header;