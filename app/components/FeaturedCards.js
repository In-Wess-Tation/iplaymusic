import Image from "next/image";
import Link from "next/link";



const FeaturedCards = ({url}) => {
    return ( 
        <Link href={"/"} className="w-72 h-80 bg-gradient-to-b from-white to-black rounded-2xl my-4 flex flex-col justify-end place-self-center relative">
            <Image src={url} alt="mflkp" width={1000} height={1000} className="absolute w-full h-full rounded-2xl" priority/>
        </Link>
     );
}
 
export default FeaturedCards;