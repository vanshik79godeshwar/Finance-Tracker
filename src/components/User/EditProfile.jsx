// src/components/EditProfileModal.js
import React, { useState } from 'react';
import axios from 'axios';

const EditProfileModal = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    photo: '',
    mobileNumber: user.mobileNumber || '',
    linkedinId: user.linkedinId || '',
    instagramId: user.instagramId || '',
    xId: user.xId || '',
    socialMediaIds: user.socialMediaIds || {},
    gender: user.gender || '',
    bio: user.bio || '',
    companyOrCollege: user.companyOrCollege || '',
    birthDate: user.birthDate || ''
  });

  const { firstName, lastName, photo, mobileNumber, linkedinId, instagramId, xId, gender, bio, companyOrCollege, birthDate } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onFileChange = (e) => setFormData({ ...formData, photo: e.target.files[0] });

  const onSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('firstName', firstName);
    formDataToSend.append('lastName', lastName);
    formDataToSend.append('photo', photo);
    formDataToSend.append('mobileNumber', mobileNumber);
    formDataToSend.append('linkedinId', linkedinId);
    formDataToSend.append('instagramId', instagramId);
    formDataToSend.append('xId', xId);
    formDataToSend.append('gender', gender);
    formDataToSend.append('bio', bio);
    formDataToSend.append('companyOrCollege', companyOrCollege);
    formDataToSend.append('birthDate', birthDate);

    try {
      const response = await axios.put('http://localhost:5000/api/user1/profile', formDataToSend, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'x-auth-token': localStorage.getItem('token') 
        }
      });
      console.log('Profile updated:', response.data);
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center overflow-y-auto">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto">
        <button 
          onClick={onClose} 
          className="text-red-400 font-bold text-lg mb-4 float-right hover:text-red-600"
        >
          &times;
        </button>
        <h1 className="text-3xl font-semibold mb-6">Edit Profile</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <input 
            type="text" 
            name="firstName" 
            value={firstName} 
            onChange={onChange} 
            placeholder="First Name" 
            className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
          />
          <input 
            type="text" 
            name="lastName" 
            value={lastName} 
            onChange={onChange} 
            placeholder="Last Name" 
            className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
          />
          <input 
            type="file" 
            name="photo" 
            onChange={onFileChange} 
            className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white"
          />
          <input 
            type="text" 
            name="mobileNumber" 
            value={mobileNumber} 
            onChange={onChange} 
            placeholder="Mobile Number" 
            className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
          />
          <input 
            type="text" 
            name="linkedinId" 
            value={linkedinId} 
            onChange={onChange} 
            placeholder="LinkedIn ID" 
            className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
          />
          <input 
            type="text" 
            name="instagramId" 
            value={instagramId} 
            onChange={onChange} 
            placeholder="Instagram ID" 
            className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
          />
          <input 
            type="text" 
            name="xId" 
            value={xId} 
            onChange={onChange} 
            placeholder="X ID" 
            className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
          />
          <div className="flex items-center space-x-4">
            <label className="font-semibold">Gender:</label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="gender" 
                value="male" 
                checked={gender === 'male'} 
                onChange={onChange} 
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="gender" 
                value="female" 
                checked={gender === 'female'} 
                onChange={onChange} 
                className="mr-2"
              />
              Female
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="gender" 
                value="other" 
                checked={gender === 'other'} 
                onChange={onChange} 
                className="mr-2"
              />
              Other
            </label>
          </div>
          <textarea
            name="bio"
            value={bio}
            onChange={onChange}
            placeholder="Bio"
            className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 resize-none"
            rows="3"
          />
          <input 
            type="text" 
            name="companyOrCollege" 
            value={companyOrCollege} 
            onChange={onChange} 
            placeholder="Company or College" 
            className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
          />
          <input 
            type="date" 
            name="birthDate" 
            value={birthDate} 
            onChange={onChange} 
            className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white"
          />
          <button 
            type="submit"
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
