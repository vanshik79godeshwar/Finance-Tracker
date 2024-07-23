import React from 'react'
import Sidebar from '../components/User/Sidebar'
import ExpensesCMP from '../components/User/ExpensesCMP';

export default function Help({ user }) {

  return (
    <div className="flex h-screen ">
      <div className='overflow-y-auto sidebar'>
        <Sidebar user={user} />
      </div>
      <div className="flex-1 bg-DarkGray text-White overflow-y-auto content">
        <ExpensesCMP user={user} /> 
      </div>
    </div>
  )
}
