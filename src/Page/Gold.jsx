import React from 'react'
import Sidebar from '../components/User/Sidebar'
import GoldCMP from '../components/User/GoldCMP'

export default function Gold({ user }) {

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1 bg-white">
        <GoldCMP user={user}/>
      </div>
    </div>
  )
}
