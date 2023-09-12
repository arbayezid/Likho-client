import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoHomepage = () => {

    const [value, setValue] = useState()
    const navigate = useNavigate()

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    }, [navigate, value])

    return (
        <div className="text-center mt-20">
            <input
            className="px-4 py-2 rounded-lg w-[300px]"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text" placeholder="Enter Room ID" /> <br/>
            <button onClick={handleJoinRoom} className="mt-5 btn bg-blue-500 rounded-lg text-white">Create Meeting</button>
        </div>
    );
};

export default VideoHomepage;