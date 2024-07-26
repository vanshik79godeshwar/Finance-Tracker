import React from 'react';
import Sidebar from '../components/User/Sidebar'; // Adjust import based on your actual path
import PieChart from '../components/User/PieChart'; // Adjust import based on your actual path
import BudgetCalculator from '../components/User/BudgetCalculator'; // Adjust import based on your actual path
import TypewriterEffect from '../components/User/TypewriterEffect'; // Adjust import based on your actual path

const flexStyle = {
  display: 'flex',
};

const flex1Style = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

const sectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  margin: '10px 0',
};

const sectionChildStyle = {
  width: '100%',
};

export default function Help({ user }) {
  return (
    <div style={flexStyle}>
      <Sidebar user={user} />
      <div style={flex1Style}>
        <div style={sectionStyle}>
          <div style={sectionChildStyle}>
            <PieChart />
          </div>
        </div>
        <div style={sectionStyle}>
          <div style={sectionChildStyle}>
            <BudgetCalculator />
          </div>
        </div>
        <div style={sectionStyle}>
          <div style={sectionChildStyle}>
            <TypewriterEffect />
          </div>
        </div>
      </div>
    </div>
  );
}
