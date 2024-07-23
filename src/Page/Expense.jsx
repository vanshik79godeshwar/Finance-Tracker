import React from 'react'
import Sidebar from '../components/User/Sidebar'
import ExpensesCMP from '../components/User/ExpensesCMP';

export default function Help({ user }) {

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1 bg-blue-400">
        <ExpensesCMP />
      </div>
    </div>
  )
}
