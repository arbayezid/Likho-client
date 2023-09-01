import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="bg-gray-200 p-4">
        <p className="text-xl font-semibold w-full">Live Chat</p>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => (
            <div
              key={index}
              className={`message w-full ${
                username === messageContent.author ? "text-right" : "text-left"
              }`}
            >
              <div className="flex flex-col">
                <div className="message-content p-2 bg-gray-100 rounded-lg">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta text-gray-500 mt-1 flex justify-end">
                  <p>{messageContent.time}</p>
                  <p className="ml-2">{messageContent.author}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className="">
        <div className="flex items-center">
          <input
            type="text"
            value={currentMessage}
            placeholder="Type Your Text..."
            className="flex-grow border rounded py-2 px-3 mr-2 w-2/3"
            onChange={(event) => setCurrentMessage(event.target.value)}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white py-2 px-4 rounded  hover:bg-blue-600 w-1/3"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
