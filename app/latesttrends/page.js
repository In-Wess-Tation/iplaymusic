import HeadlinePage from "../components/HeadlinePage";
import TrendsCards from "../components/TrendsCards";


const LatestTrends = () => {
    return (
        <main>
            <HeadlinePage headline={"Latest Trends"} />
            <article className="">
                <TrendsCards />
                <div className="w-[98%] h-72 bg-[#EE0979] rounded-3xl ml-2.5 -z-20 flex items-center gap-x-10">
                    <h2 className="capitalize text-white font-semibold pl-4">Trending now</h2>
                    <div className="w-72 h-32 overflow-x-scroll flex justify-between">
                        <div className="w-32 min-w-32 h-32 bg-black ml-2"></div>
                        <div className="w-32 min-w-32 h-32 bg-black ml-2"></div>
                        <div className="w-32 min-w-32 h-32 bg-black ml-2"></div>
                        <div className="w-32 min-w-32 h-32 bg-black ml-2"></div>
                        <div className="w-32 min-w-32 h-32 bg-black ml-2"></div>
                        <div className="w-32 min-w-32 h-32 bg-black ml-2"></div>
                    </div>
                </div>
                <TrendsCards />
            </article>
        </main>
    );
}

export default LatestTrends;