import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { Routes, Route, useParams, Outlet, useNavigate } from 'react-router-dom';
import Profile from './Profile';
import Help from './Help';
import Settings from './Settings';
import Dashboard from './Dashboard';
import Gold from './Gold';
import Budget from './Budget';
import Income from './Income';
import Expense from './Expense';
import ETF from './ETF';
import { Currency } from 'lucide-react';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }
        const response = await api.get(`/api/user/${username}`, {
          headers: { 'x-auth-token': token }
        });

        setUserData(response.data);
        console.log('User data fetched successfully');
        console.log('User data:', response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [username, navigate]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="profile" element={<Profile user={userData} />} />
          <Route path="settings" element={<Settings user={userData} />} />
          <Route path="help" element={<Help user={userData} />} />
          <Route path="dashboard" element={<Dashboard user={userData} />} />
          <Route path="gold" element={<Gold user={userData} />} />
          <Route path="currency" element={<Currency user={userData} />} />
          <Route path="history" element={<History user={userData} />} />
          <Route path="budget" element={<Budget user={userData} />} />
          <Route path="expense" element={<Expense user={userData}/>} />
          <Route path="income" element={<Income user={userData} />} />
          <Route path="etf" element={<ETF user={userData} />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
};

export default User;
