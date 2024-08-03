import React from 'react';
import Sidebar from '../components/User/Sidebar'; // Adjust import based on your actual path
import PieChart from '../components/User/PieChart'; // Adjust import based on your actual path
import BudgetCalculator from '../components/User/BudgetCalculator'; // Adjust import based on your actual path
import TypewriterEffect from '../components/User/TypewriterEffect'; // Adjust import based on your actual path

export default function Help({ user }) {
  return (
    <div className="flex h-screen">
      <div className='overflow-y-auto sidebar'>
        <Sidebar user={user} />
      </div>
      <div className="flex-1 bg-DarkGray text-White overflow-y-auto content">
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="bg-zinc-800 border-2 border-orange-500 p-6 rounded-lg shadow-lg animation-border-animate">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-4">
                <PieChart />
              </div>
              <div className="p-4">
                <BudgetCalculator />
              </div>
            </div>
          </div>
          <div className="mt-8 bg-zinc-800 p-6 rounded-lg shadow-lg">
            <TypewriterEffect />
          </div>
        </div>
      </div>
    </div>
  );
}
