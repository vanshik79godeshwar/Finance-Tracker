import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditProfileModal from './EditProfile';
import { faUser, faEnvelope, faPhone, faBuilding, faCalendar, faGenderless, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-8">
      <div className="relative w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Cover Section */}
        <div className="relative">
          <div className="h-40 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg -mb-16">
              <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        <div className="pt-24 pb-8 px-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">Profile</h1>
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
                <span className="text-lg">Username: {user.username}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-400" />
                <span className="text-lg">Email: {user.email}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-400" />
                <span className="text-lg">First Name: {user.firstName}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-400" />
                <span className="text-lg">Last Name: {user.lastName}</span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-400" />
                <span className="text-lg">Mobile Number: {user.mobileNumber}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faBuilding} className="mr-2 text-blue-400" />
                <span className="text-lg">Company/College: {user.companyOrCollege}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-blue-400" />
                <span className="text-lg">Birth Date: {user.birthDate ? new Date(user.birthDate).toLocaleDateString() : ''}</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faGenderless} className="mr-2 text-blue-400" />
                <span className="text-lg">Gender: {user.gender}</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-md mb-6">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faComment} className="mr-2 text-blue-400" />
              <span className="text-lg">Bio:</span>
            </div>
            <p>{user.bio}</p>
          </div>
          <div className="flex flex-col mb-6">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-400" />
              <span className="text-lg">LinkedIn ID: {user.linkedinId}</span>
            </div>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-400" />
              <span className="text-lg">Instagram ID: {user.instagramId}</span>
            </div>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-400" />
              <span className="text-lg">X ID: {user.xId}</span>
            </div>
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
