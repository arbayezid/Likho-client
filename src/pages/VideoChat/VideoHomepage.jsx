import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoHomepage = () => {

    const [value, setValue] = useState()
    const navigate = useNavigate()

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    }, [navigate, value])

    return (
        <div className="text-center mt-20 mb-20">
            <h2 className="p-10 text-xl font-semibold text-gray-700">Save time and stay focused on your business and your passion. Hire a virtual assistant from <br /> Likho that does your administrative tasks and much more</h2>
            <input
                className="px-4 py-2 rounded-lg w-[300px]"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text" placeholder="Enter Room ID" /> <br />
            <button onClick={handleJoinRoom} className="mt-5 btn bg-blue-500 rounded-lg text-white">Create Meeting</button>
        </div>
    );
};

export default VideoHomepage;