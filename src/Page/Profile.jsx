import React from 'react';
import { Navigate } from 'react-router-dom';
import Sidebar from '../components/User/Sidebar';
import ProfileCMP from '../components/User/ProfileCMP';

export default function Profile({ user }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-screen">
      <div className="overflow-y-auto sidebar">
        <Sidebar user={user} />
      </div>
      <div className="flex-1 bg-DarkGray text-White overflow-y-auto content">
        <ProfileCMP user={user} />
      </div>
    </div>
  );
}
