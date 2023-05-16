

const HashtagBox = ({ hashtag }) => {
    return (
        <div className="bg-[#ee0979] w-[20%] h-[2rem] min-w-[20%] mr-3.5 rounded-full">
            <p className="text-white text-center my-1">#{hashtag}</p>
        </div>
    );
}

export default HashtagBox;