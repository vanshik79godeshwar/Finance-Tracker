import React from 'react'
import Sidebar from '../components/User/Sidebar'

export default function Settings({ user }) {

  user.avatar = "https://via.placeholder.com/150";

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1 bg-white">
        {/* Your main content goes here */}
      </div>
    </div>
  )
}
