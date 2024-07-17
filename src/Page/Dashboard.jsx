import React from 'react'
import Sidebar from '../components/User/Sidebar'
import DashboardCMP from '../components/User/DashboardCMP'

export default function Dashboard({ user }) {

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1 bg-white">
        <DashboardCMP />
      </div>
    </div>
  )
}
