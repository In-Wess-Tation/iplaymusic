

const EventCard = ({headline, people, hashtags}) => {
    return (
        <div className="w-[22rem] h-96 bg-gradient-to-t from-[#111625] to-transparent rounded-xl place-self-center flex flex-col items-start justify-end">
            <div className="mx-4 my-6">
                <p className="text-pink text-xs">#{hashtags}</p>
                <p className="text-white text-xs pt-1">{people} are talking about this</p>
                <h2 className="text-white font-bold text-xl pt-1">{headline}Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            </div>
        </div>
    );
}

export default EventCard;