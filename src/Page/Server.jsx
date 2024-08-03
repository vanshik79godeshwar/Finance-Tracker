import React from 'react'
import Sidebar from '../components/User/Sidebar'
import GroupSelecter from '../components/User/Group'

export default function Profile({ user }) {

  console.log(user.avatar)
  return (
    <div className="flex h-screen ">
      <div className='overflow-y-auto sidebar'>
        <Sidebar user={user} />
      </div>
      <div className="flex-1 bg-DarkGray text-White overflow-y-auto content">
        <GroupSelecter sender={user.username} senderAvatar={user.avatar} id={user._id}/>
      </div>
    </div>
  )
}
