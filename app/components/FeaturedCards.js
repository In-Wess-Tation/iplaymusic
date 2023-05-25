import Image from "next/image";
import Link from "next/link";


const FeaturedCards = ({url}) => {
    return ( 
        <Link href={"/"} className="w-72 h-80 bg-gradient-to-b from-white to-black rounded-2xl my-4 flex flex-col justify-end place-self-center relative">
            <Image src={url} alt="mflkp" width={1000} height={1000} className="absolute w-full h-full rounded-2xl"/>
            {/* <div className="py-6 px-4 text-white">
                <h1 className="text-3xl capitalize font-medium">{headline}</h1>
                <p className="pt-2 text-xs">Track</p>
            </div> */}
        </Link>
     );
}
 
export default FeaturedCards;