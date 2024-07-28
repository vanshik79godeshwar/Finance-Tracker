import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditProfileModal from './EditProfile';
import { faUser, faEnvelope, faPhone, faBuilding, faCalendar, faGenderless, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user1/profile1', {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [count]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleProfileUpdate = () => {
    setCount(count + 1);
    setIsModalOpen(false);
  };

  if (!user) {
    return (
      <div className='flex justify-center font-bold text-3xl h-full w-full items-center gap-4'>
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#3498db", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#9b59b6", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40" stroke="url(#gradient)" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="0" strokeLinecap="round">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values="0;251.2;0"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        <span>Finding your data...</span>
      </div>

    );
  }

  return (
    <div className="bg-Black text-white min-h-screen flex flex-col items-center py-8">
      <div className="relative w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Cover Section */}
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-2  border-white shadow-lg -mb-16 ">
              <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="pt-24 pb-8 px-6">
          <div className="flex justify-between items-center mb-20">
            <h1 className="font-Lobster text-violet-500 text-6xl">Profile Section</h1>
            <button
              onClick={toggleModal}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
            >
              Edit Profile
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-400" />
                <span className="text-lg font-mono">Username: {user.username}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-400" />
                <span className="text-lg font-mono">Email: {user.email}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-400" />
                <span className="text-lg font-mono">First Name: {user.firstName}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-400" />
                <span className="text-lg font-mono">Last Name: {user.lastName}</span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-400" />
                <span className="text-lg font-mono">Mobile Number: {user.mobileNumber}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faBuilding} className="mr-2 text-blue-400" />
                <span className="text-lg font-mono">Company/College: {user.companyOrCollege}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-blue-400" />
                <span className="text-lg font-mono">Birth Date: {user.birthDate ? new Date(user.birthDate).toLocaleDateString() : ''}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faGenderless} className="mr-2 text-blue-400" />
                <span className="text-lg font-mono">Gender: {user.gender}</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-md mb-6">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faComment} className="mr-2 text-blue-400" />
              <span className="text-lg font-mono">Bio:</span>
            </div>
            <p className='ml-5 font-light text-gray-400'>{user.bio}</p>
          </div>
          <div className="flex justify-center mb-6">
            {user.linkedinId && (
              <a href={user.linkedinId} target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-400 hover:text-blue-500 transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            )}
            {user.instagramId && (
              <a href={user.instagramId} target="_blank" rel="noopener noreferrer" className="mr-4 text-pink-400 hover:text-pink-500 transition duration-300">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            )}
            {user.xId && (
              <a href={user.xId} target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-400 hover:text-blue-500 transition duration-300">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <EditProfileModal user={user} onClose={handleProfileUpdate} />
      )}
    </div>
  );
};

export default Profile;
