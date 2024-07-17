import React from 'react'
import Sidebar from '../components/User/Sidebar'
import HistoryCMP from '../components/User/HistoryCMP'

export default function History({ user }) {

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1 bg-white">
        <HistoryCMP />
      </div>
    </div>
  )
}
