import React from 'react'
import Sidebar from '../components/User/Sidebar'

export default function Profile({ user }) {

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1 bg-white">
        {/* Your main content goes here */}
      </div>
    </div>
  )
}
