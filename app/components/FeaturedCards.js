import Image from "next/image";
import Link from "next/link";



const FeaturedCards = ({link, url, alt, key}) => {
    return ( 
        <Link key={key} href={link} className="w-72 h-72 aspect-video rounded-2xl my-4 flex flex-col justify-end place-self-center relative">
            <Image src={url} alt={alt} width={1000} height={1000} className="absolute w-full h-full rounded-2xl object-contain" priority />
        </Link>
     );
}
 
export default FeaturedCards;