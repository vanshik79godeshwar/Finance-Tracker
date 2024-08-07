import React, { useState } from 'react';
import axios from 'axios';
import api from '../../utils/api';

const EditProfileModal = ({ user, onClose }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    photo: '',
    mobileNumber: user.mobileNumber || '',
    linkedinUrl: user.linkedinUrl || '',
    instagramUrl: user.instagramUrl || '',
    xUrl: user.xUrl || '',
    gender: user.gender || '',
    bio: user.bio || '',
    companyOrCollege: user.companyOrCollege || '',
    birthDate: formatDate(user.birthDate) || ''
  });

  const [errors, setErrors] = useState({});

  const { firstName, lastName, photo, mobileNumber, linkedinUrl, instagramUrl, xUrl, gender, bio, companyOrCollege, birthDate } = formData;

  const onChange = (e) => {
    console.log(`Changing ${e.target.name} to ${e.target.value}`);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    console.log(`Changing photo to ${e.target.files[0]}`);
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const validateForm = () => {
    const mobilePattern = /^[0-9]{10}$/;
    const urlPattern = /^(https?:\/\/)?([\w.-]+)?(\.[a-z]{2,})(\/[^\s]*)?$/i;
    let validationErrors = {};

    if (mobileNumber && !mobilePattern.test(mobileNumber)) {
      validationErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
      console.log('Mobile Number:', mobileNumber);
    }

    if (linkedinUrl && !urlPattern.test(linkedinUrl)) {
      validationErrors.linkedinUrl = 'Please enter a valid LinkedIn URL';
      console.log('LinkedIn URL:', linkedinUrl);
    }

    if (instagramUrl && !urlPattern.test(instagramUrl)) {
      validationErrors.instagramUrl = 'Please enter a valid Instagram URL';
      console.log('Instagram URL:', instagramUrl);
    }

    if (xUrl && !urlPattern.test(xUrl)) {
      validationErrors.xUrl = 'Please enter a valid X URL';
      console.log('X URL:', xUrl);
    }

    setErrors(validationErrors);
    console.log('Validation Errors:', validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataToSend = new FormData();
    formDataToSend.append('firstName', firstName);
    formDataToSend.append('lastName', lastName);
    formDataToSend.append('photo', photo);
    formDataToSend.append('mobileNumber', mobileNumber);
    formDataToSend.append('linkedinUrl', linkedinUrl);
    formDataToSend.append('instagramUrl', instagramUrl);
    formDataToSend.append('xUrl', xUrl);
    formDataToSend.append('gender', gender);
    formDataToSend.append('bio', bio);
    formDataToSend.append('companyOrCollege', companyOrCollege);
    formDataToSend.append('birthDate', birthDate);

    try {
      const response = await api.put('/api/user1/profile', formDataToSend, {
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
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-3xl max-h-screen overflow-y-auto">
        <button 
          onClick={onClose} 
          className="text-red-400 font-bold text-2xl mb-4 float-right hover:text-red-600"
        >
          &times;
        </button>
        <h1 className="text-3xl font-Lobster text-gray-400 mb-6">Edit Profile</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              name="firstName" 
              value={firstName} 
              onChange={onChange} 
              placeholder="First Name" 
              className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <input 
              type="text" 
              name="lastName" 
              value={lastName} 
              onChange={onChange} 
              placeholder="Last Name" 
              className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
          <div>
            <input 
              type="file" 
              name="photo" 
              onChange={onFileChange} 
              className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white"
            />
          </div>
          <div>
            <input 
              type="text" 
              name="mobileNumber" 
              value={mobileNumber} 
              onChange={onChange} 
              placeholder="Mobile Number" 
              className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
          </div>
          <div>
            <input 
              type="text" 
              name="linkedinUrl" 
              value={linkedinUrl} 
              onChange={onChange} 
              placeholder="LinkedIn URL" 
              className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
            />
            {errors.linkedinUrl && <p className="text-red-500 text-sm mt-1">{errors.linkedinUrl}</p>}
          </div>
          <div>
            <input 
              type="text" 
              name="instagramUrl" 
              value={instagramUrl} 
              onChange={onChange} 
              placeholder="Instagram URL" 
              className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
            />
            {errors.instagramUrl && <p className="text-red-500 text-sm mt-1">{errors.instagramUrl}</p>}
          </div>
          <div>
            <input 
              type="text" 
              name="xUrl" 
              value={xUrl} 
              onChange={onChange} 
              placeholder="X URL" 
              className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
            />
            {errors.xUrl && <p className="text-red-500 text-sm mt-1">{errors.xUrl}</p>}
          </div>
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
          <div>
            <textarea
              name="bio"
              value={bio}
              onChange={onChange}
              placeholder="Bio"
              className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 resize-none"
              rows="3"
            />
            {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
          </div>
          <div>
            <input 
              type="text" 
              name="companyOrCollege" 
              value={companyOrCollege} 
              onChange={onChange} 
              placeholder="Company or College" 
              className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
            />
            {errors.companyOrCollege && <p className="text-red-500 text-sm mt-1">{errors.companyOrCollege}</p>}
          </div>
          <div>
            <input 
              type="date" 
              name="birthDate" 
              value={birthDate} 
              onChange={onChange} 
              className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white"
            />
            {errors.birthDate && <p className="text-red-500 text-sm mt-1">{errors.birthDate}</p>}
          </div>
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
