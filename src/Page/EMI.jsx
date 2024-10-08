import React from 'react'
import Sidebar from '../components/User/Sidebar'
import EmiCMP from '../components/User/EmiCMP'
import '../components/User/sidebar.css';


export default function Profile({ user }) {

  return (
    <div className="flex h-screen ">
      <div className='overflow-y-auto sidebar'>
        <Sidebar user={user} />
      </div>
      <div className="flex-1 bg-DarkGray text-White overflow-y-auto content">
        <EmiCMP user={user} />
      </div>
    </div>
  )
}
