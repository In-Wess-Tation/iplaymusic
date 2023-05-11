import Header from "../components/Header";
import TrendsCards from "../components/TrendsCards";


const LatestTrends = () => {
    return ( 
        <main>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee0979] to-[#ff6a00] text-4xl font-bold pl-10 py-4">Lastest trends</h1>
            <article className="flex flex-col">
                <TrendsCards />
                <div className="w-[98%] h-72 bg-[#EE0979] rounded-3xl ml-2.5 -z-20 flex items-center gap-x-10 overflow__X ">
                    <h2 className="capitalize text-white font-semibold pl-4">Trending now</h2>
                    <div className="w-32 h-32 bg-black"></div>
                    <div className="w-32 h-32 bg-black"></div>
                    <div className="w-32 h-32 bg-black"></div>
                    <div className="w-32 h-32 bg-black"></div>
                    <div className="w-32 h-32 bg-black"></div>
                    <div className="w-32 h-32 bg-black"></div>
                    <div className="w-32 h-32 bg-black"></div>
                    <div className="w-32 h-32 bg-black"></div>
                </div>
                <TrendsCards />
            </article>
        </main>
     );
}
 
export default LatestTrends;