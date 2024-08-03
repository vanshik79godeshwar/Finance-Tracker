// components/GroupSelector.js
import React, { useState } from 'react';
import Chat from './Chat';

const GroupSelector = ({ sender, senderAvatar, id }) => {
  const [selectedGroup, setSelectedGroup] = useState('trading');

  return (
    <div className='h-screen bg-gray-900 text-gray-100'>
      <div className="mb-2 h-14 flex justify-start items-center gap-3">
        <span className='ml-3 font-mono mr-5 text-lg tracking-wide'>Channels:</span>
        <button
          onClick={() => setSelectedGroup('trading')}
          className={`mr-2 p-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
            selectedGroup === 'trading'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 hover:text-white'
          }`}
        >
          Trading
        </button>
        <button
          onClick={() => setSelectedGroup('investing')}
          className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
            selectedGroup === 'investing'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 hover:text-white'
          }`}
        >
          Investing
        </button>
      </div>
      <Chat group={selectedGroup} sender={sender} senderAvatar={senderAvatar} id={id} className="h-1/2"/>
    </div>
  );
};

export default GroupSelector;
