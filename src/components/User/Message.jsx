// components/Message.jsx
import React from 'react';

const Message = ({ sender, text, avatar, isOwnMessage }) => {
  return (
    <div className={`flex items-start mb-4 ${isOwnMessage ? 'justify-end' : ''}`}>
      {!isOwnMessage && (
        <img
          src={avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full mr-3"
        />
      )}
      <div className={`max-w-xs ${isOwnMessage ? 'text-right' : 'text-left'}`}>
        <div className={`px-4 py-2 rounded-lg shadow ${isOwnMessage ? 'bg-gray-800 text-white' : 'bg-gray-700 text-white'}`}>
          <div className='flex flex-row'>
            <p className='font-serif text-violet-500'>{sender}</p>
            {sender === 'vanshik' && <p className='font-sans text-xs ml-3 mt-1 text-orange-400'>(Admin)</p>}
          </div>
          <p className='font-sans text-lg'>{text}</p>
        </div>
      </div>
      {isOwnMessage && (
        <img
          src={avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full ml-3"
        />
      )}
    </div>
  );
};

export default Message;
