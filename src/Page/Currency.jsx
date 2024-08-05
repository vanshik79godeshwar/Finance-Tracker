import React from 'react'
import Sidebar from '../components/User/Sidebar'
import CurrencyCMP from '../components/User/CurrencyCMP'
import '../components/User/sidebar.css';
// import '../components/User/CurrencyCMP.module.css';


export default function Profile({ user }) {

  return (
    <div className="flex h-screen ">
      <div className='overflow-y-auto sidebar'>
        <Sidebar user={user} />
      </div>
      <div className="flex-1 bg-DarkGray text-White overflow-y-auto content">
        <CurrencyCMP user={user} />
      </div>
    </div>
  )
}
