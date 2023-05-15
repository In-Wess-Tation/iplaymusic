import EventCard from "../components/EventCard";
import HashtagBox from "../components/Hashtagbox";
import HeadlinePage from "../components/HeadlinePage";


const EventsFeed = () => {
    return (
        <main className="grid w-full">
            <HeadlinePage headline={"Events Feed"} />
            <div className="flex w-full h-20 justify-between overflow-x-scroll ml-10 my-2">
                <HashtagBox />
                <HashtagBox />
                <HashtagBox />
                <HashtagBox />
                <HashtagBox />
            </div>
            <EventCard />
        </main>
    );
}

export default EventsFeed;