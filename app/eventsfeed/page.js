import EventCard from "../components/EventCard";
import HashtagBox from "../components/Hashtagbox";
import HeadlinePage from "../components/HeadlinePage";


const EventsFeed = () => {
    return (
        <main className="grid w-full">
            <HeadlinePage headline={"Events Feed"} />
            <div className="ml-8">
                <div className="flex w-auto h-20 justify-between overflow-x-scroll my-2 no-scrollbar">
                    <HashtagBox />
                    <HashtagBox />
                    <HashtagBox />
                    <HashtagBox />
                    <HashtagBox />
                    <HashtagBox />
                </div>
            </div>
            <EventCard />
        </main>
    );
}

export default EventsFeed;