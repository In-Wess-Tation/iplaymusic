import HeadlinePage from "../components/HeadlinePage";
import TrendingBox from "../components/TrendingBox";
import TrendsCards from "../components/TrendsCards";


const LatestTrends = () => {
    return (
        <main className="grid w-full">
            <HeadlinePage headline={"Latest Trends"} />
                <div className="relative top-3 justify-self-center">
                    <TrendsCards />
                </div>
                    <div className="w-[98%] h-[18rem] bg-pink rounded-3xl ml-2">
                        <h2 className="capitalize text-white font-semibold pl-3 relative top-32">Trending now</h2>
                        <div className="flex w-auto h-32 justify-between overflow-x-scroll my-14 ml-[9rem] no-scrollbar">
                            <TrendingBox />
                            <TrendingBox />
                            <TrendingBox />
                            <TrendingBox />
                        </div>
                    </div>
                <div className="relative bottom-3 justify-self-center">
                    <TrendsCards />
                </div>
        </main>
    );
}

export default LatestTrends;