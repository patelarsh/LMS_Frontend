import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Message() {
    const Usertoken = JSON.parse(localStorage.getItem("Usertoken"));
    const Lawyertoken = JSON.parse(localStorage.getItem("Lawyertoken"));
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const { id } = useParams();

    const isLawyer = Lawyertoken !== null;
    const currentUser = isLawyer ? Lawyertoken.lawyer : Usertoken?.user;

    const handleSend = async () => {
        const url = "https://lawyer-management-system-api.onrender.com/message/post-message";

        const messageData = {
            senderId: currentUser?._id, 
            receiverId: id,
            senderRole: isLawyer ? "lawyer" : "user", 
            message: message,
        };

        try {
            const response = await axios.post(url, messageData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Message sent:", response.data);
            setMessage("");
            getMessages(); // Refresh messages after sending
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const getMessages = async () => {
        const url = `https://lawyer-management-system-api.onrender.com/message/get-message/${currentUser?._id}/${id}`;

        try {
            const response = await axios.get(url);
            setMessages(response.data.data);
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };

    useEffect(() => {
        getMessages();
    }, [id]);

    return (
        <div className="container">
            <div className="container-fluid">
                <header className="text-white p-3 text-center" style={{background:"#006ebd"}}>
                    <h1>Message</h1>
                </header>

                <div className="row">
                    <div className="col-md-12 p-3">
                        <div className="chat-window bg-white p-3">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`message ${msg.senderId === currentUser?._id ? "sent" : "received"}`}
                                >
                                    {msg.message}
                                    <div className="text-end">
                                        <span style={{ fontSize: "10px" }} className="ms-2">
                                            {new Date(msg.createdAt).toLocaleDateString("en-US", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="input-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type a message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                            />
                            <button onClick={handleSend} className="btn text-white" style={{background:"#006ebd"}}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;