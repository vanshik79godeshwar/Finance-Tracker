import React from 'react'
import Sidebar from '../components/User/Sidebar'
import DashboardCMP from '../components/User/Dashboard1CMP'
import '../components/User/sidebar.css';


export default function Dashboard({ user }) {

  return (
    <div className='flex h-screen'>
      <div className="overflow-y-auto sidebar">
        <Sidebar user={user} />
      </div>
      <div className="flex-1 bg-DarkGray text-White overflow-y-auto content">
        <DashboardCMP user={user} />
      </div>
    </div>
  )
}
 