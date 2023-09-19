import React, { useState } from 'react';
import io from "socket.io-client";
import Chat from './Chat';

import animationData from '../../../public/chat.json';
import Lottie from 'react-lottie';


const socket = io.connect("http://localhost:5000");

const ChatContainer = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className={`fixed shadow-xl ${isChatOpen ? 'bottom-2 right-2' : 'bottom-5 right-5'} z-10`}>
            {isChatOpen ? (
                <div className="bg-white rounded shadow p-4 w-full max-h-96 sm:w-72 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-fit">
                        {!showChat ? (
                            <div className="bg-white  rounded shadow-md w-full">
                                <h3 className="text-lg font-semibold mb-4">Join a Chat</h3>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name.."
                                    className="border rounded py-2 px-3 mb-2 w-full"
                                    onChange={(event) => setUsername(event.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Enter Room ID..."
                                    className="border rounded py-2 px-3 mb-4 w-full"
                                    onChange={(event) => setRoom(event.target.value)}
                                />
                                <button
                                    onClick={joinRoom}
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
                                >
                                    Join
                                </button>
                            </div>
                        ) : (
                            <Chat socket={socket} username={username} room={room} />
                        )}
                    </div>
                </div>
            ) : (
                <div
                    className="bg-blue-500 text-white pr-4 py-1 rounded-full cursor-pointer flex items-center"
                    onClick={toggleChat}
                >
                    {/* You can use an icon library like FontAwesome for the chat icon */}
                    {/* <FaRocketchat className='text-2xl'></FaRocketchat> */}
                    <div>
                        <Lottie
                            options={defaultOptions}
                            height={40}
                            width={50}
                        />
                    </div>
                    <p className='font-bold text-lg'> Live Chat</p>
                </div>
            )}
        </div>
    );
};

export default ChatContainer;
