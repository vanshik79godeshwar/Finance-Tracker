// components/Message.jsx
import React, { useState } from 'react';
import axios from 'axios';
import UserDetailsBox from './UserDetailsBox';

const Message = ({ sender, text, avatar, isOwnMessage }) => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserDetails = async (username) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/get-user/get-user/${username}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleUserDetailsClick = async () => {
    if (!userDetails) {
      await fetchUserDetails(sender); // Fetch details for the user with the sender's username
    }
    setShowUserDetails(true);
  };

  return (
    <div className={`relative flex items-start mb-4 ${isOwnMessage ? 'justify-end' : ''}`}>
      {!isOwnMessage && (
        <img
          src={avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full mr-3 cursor-pointer"
          onClick={handleUserDetailsClick}
        />
      )}
      <div className={`max-w-xs ${isOwnMessage ? 'text-right' : 'text-left'}`}>
        <div className={`px-4 py-2 rounded-lg shadow ${isOwnMessage ? 'bg-gray-800 text-white' : 'bg-gray-700 text-white'}`}>
          <div className='flex flex-row items-baseline'>
            <p className='font-serif text-violet-500 cursor-pointer' onClick={handleUserDetailsClick}>
              {sender}
            </p>
            {sender === 'vanshik' && <p className='font-sans text-xs ml-3 mt-1 text-orange-400'>(Admin)</p>}
          </div>
          <p className='font-sans text-lg break-words'>{text}</p>
        </div>
      </div>
      {isOwnMessage && (
        <img
          src={avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full ml-3 cursor-pointer"
          onClick={handleUserDetailsClick}
        />
      )}
      {showUserDetails && userDetails && (
        <UserDetailsBox user={userDetails} onClose={() => setShowUserDetails(false)} />
      )}
    </div>
  );
};

export default Message;
