

const TrendsCards = ({headline, hashtagnr, people}) => {
    return ( 
        <div className="w-80 h-[25rem] bg-neutral-400 rounded-2xl text-white flex flex-col items-start justify-end ">
            <div className="mx-6 my-8">
                <h2 className="text-xl font-bold">EDM</h2>
                <h3 className="text-sm">{hashtagnr}#hashtags</h3>
                <p className="text-xs">{people}are talking about this</p>
            </div>
        </div>
     );
}
 
export default TrendsCards;