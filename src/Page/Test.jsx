import React from 'react'
import Sidebar from '../components/User/Sidebar'

export default function Test() {
    const user = {
        name: "Kelly Hartmann",
        email: "hartmann_kelly@gmail.com",
        avatar: "https://via.placeholder.com/150" // Replace with the actual image URL
      };
    
  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1 bg-white">
        {/* Your main content goes here */}
      </div>
    </div>
  )
}
