// components/Chat.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import Message from './Message';

const socket = io('http://localhost:5000');

const Chat = ({ group, sender, senderAvatar }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/chat/${group}`);
                const data = Array.isArray(response.data) ? response.data : [];
                setMessages(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMessages();

        socket.emit('joinGroup', group);

        socket.on('receiveMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('receiveMessage');
        };
    }, [group]);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            const message1 = {
                group,
                sender,
                message: newMessage,
                avatar: senderAvatar,
            };

            try {
                socket.emit('sendMessage', message1);
                setNewMessage('');
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div className="flex flex-col p-4 bg-gray-800 rounded-lg shadow-lg " style={{height: "90%"}}>
            <div className="flex-1 sidebar overflow-y-auto mb-4 bg-gray-900 bg-opacity-50 p-2 rounded-lg" style={{ backgroundImage: 'url(../../assets/pattern1.jpg)', backgroundSize: '20px 20px' }}>
                {messages.map((msg, index) => (
                    <Message
                        key={index}
                        sender={msg.sender}
                        text={msg.message}
                        avatar={msg.avatar}
                        isOwnMessage={msg.sender === sender}
                    />
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-3 border border-gray-700 rounded-l-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                    onClick={handleSendMessage}
                    className="p-3 w-1/6 bg-blue-600 text-white rounded-r-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
