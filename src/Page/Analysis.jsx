import React from 'react'
import Sidebar from '../components/User/Sidebar'
import AnalysisCMP from '../components/User/AnalysisCMP'

export default function Analysis({ user }) {

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1 bg-white">
        <AnalysisCMP />
      </div>
    </div>
  )
}
