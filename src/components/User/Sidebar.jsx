import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaQuestionCircle, FaCog, FaTachometerAlt, FaBell, FaEnvelope, FaChartLine, FaChartPie, FaFileAlt, FaPuzzlePiece, FaCode, FaCreditCard, FaHome } from 'react-icons/fa';
import BrandLogo from '../../assets/Brand_LOGO.png';
import PrivateRoute from '../../PrivateRoute'; // Import PrivateRoute

const Sidebar = ({ user }) => {
    const sections = [
        { name: 'Profile', path: '/profile', icon: <FaUser /> },
        { name: 'Help', path: '/help', icon: <FaQuestionCircle /> },
        { name: 'Settings', path: '/settings', icon: <FaCog /> },
        { name: 'Dashboard', path: '/dashboard', icon: <FaTachometerAlt /> },
        { name: 'Notifications', path: '/notifications', icon: <FaBell /> },
        { name: 'Messages', path: '/messages', icon: <FaEnvelope /> },
        { name: 'Budget', path: '/budget', icon: <FaChartLine /> },
        { name: 'Analytics', path: '/analytics', icon: <FaChartPie /> },
        { name: 'Communities', path: '/Server', icon: <FaChartPie /> },
        { name: 'Reports', path: '/reports', icon: <FaFileAlt /> },
        { name: 'ETF', path: '/etf', icon: <FaFileAlt /> },
        { name: 'Integrations', path: '/integrations', icon: <FaPuzzlePiece /> },
        { name: 'Expense', path: '/expense', icon: <FaPuzzlePiece /> },
        { name: 'Income', path: '/income', icon: <FaCode /> },
        { name: 'Billing', path: '/billing', icon: <FaCreditCard /> },
    ];

    return (
        <div className="flex flex-col w-64 h-screen px-4 py-8 bg-Black border-r dark:bg-gray-800 dark:border-gray-600 md:relative md:h-auto md:overflow-y-auto md:mt-0 md:border-none">
            <div className='flex flex-row justify-between items-center'>
                <img className='h-8 w-8' src={BrandLogo} alt="Brand Logo" />
                <Link to="/" className="p-2 text-2xl rounded-full hover:bg-gray-700 dark:hover:bg-gray-600">
                    <FaHome className="text-gray-200 dark:text-gray-100" />
                </Link>
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2 mb-7">
                <div className='p-1 border rounded-full mb-7'>
                    <img
                        className="object-cover w-28 h-28 rounded-full"
                        src={user.avatar} // Replace with the actual image URL
                        alt="avatar"
                    />
                </div>
                <h4 className="mx-2 mt-2 text-lg font-medium text-gray-200">{user.username}</h4>
                <p className="mx-2 mt-1 text-sm font-medium text-gray-400">{user.email}</p>
            </div>

            <div className="flex-1 mt-6 overflow-y-auto">
                <nav className="flex flex-col space-y-2">
                    {sections.map((section, index) => (
                        <PrivateRoute
                            key={index}
                            element={
                                <Link
                                    className={`flex items-center px-4 py-2 text-gray-200 rounded-md hover:bg-gradient-to-r from-gray-600 to-Black hover:text-white dark:text-gray-100 dark:hover:bg-gray-600 ${window.location.pathname === `/${user.username}${section.path}` ? 'bg-gray-500' : ''}`}
                                    to={`/${user.username}${section.path}`}
                                >
                                    {section.icon}
                                    <span className="mx-4 font-medium">{section.name}</span>
                                </Link>
                            }
                        />
                    ))}
                </nav>
            </div>

            <div className="mt-9">
                <div className="flex flex-col py-7 gap-0 text-center text-gray-700 text-3xl font-semibold">
                    <span className="px-2 rounded-md font-Lobster">Capital</span>
                    <span className="px-2 rounded-md font-Lobster">Compass</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
