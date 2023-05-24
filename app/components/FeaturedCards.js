

const FeaturedCards = ({heading}) => {
    return ( 
        <div className="w-72 h-80 bg-gradient-to-b from-white to-black rounded-2xl my-4 flex flex-col justify-end place-self-center">
            <div className="py-6 px-4 text-white">
                <h1 className="text-3xl capitalize font-medium">{heading}</h1>
                <p className="pt-2 text-xs">Track</p>
            </div>
        </div>
     );
}
 
export default FeaturedCards;