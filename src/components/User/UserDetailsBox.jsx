// components/UserDetailsBox.jsx
import React from 'react';
import { faUser, faEnvelope, faPhone, faBuilding, faCalendar, faGenderless, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const UserDetailsBox = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-4xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-400 transition duration-300"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mr-8">
            <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold mb-4">{user.username}</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-3 text-blue-400" size="lg" />
                <span className="text-lg font-mono">Username: {user.username}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-blue-400" size="lg" />
                <span className="text-lg font-mono">Email: {user.email}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faBuilding} className="mr-3 text-blue-400" size="lg" />
                <span className="text-lg font-mono">Company/College: {user.companyOrCollege}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCalendar} className="mr-3 text-blue-400" size="lg" />
                <span className="text-lg font-mono">Birth Date: {user.birthDate ? new Date(user.birthDate).toLocaleDateString() : 'N/A'}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGenderless} className="mr-3 text-blue-400" size="lg" />
                <span className="text-lg font-mono">Gender: {user.gender}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 p-6 rounded-md mb-8">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faComment} className="mr-3 text-blue-400" size="lg" />
            <span className="text-lg font-mono">Bio:</span>
          </div>
          <p className='ml-8 font-light text-gray-300'>{user.bio}</p>
        </div>
        <div className="flex justify-center space-x-6">
          {user.linkedinId && (
            <a href={user.linkedinId} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          )}
          {user.instagramId && (
            <a href={user.instagramId} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500 transition duration-300">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          )}
          {user.xId && (
            <a href={user.xId} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsBox;
