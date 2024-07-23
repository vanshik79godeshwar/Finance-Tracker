import React from 'react';

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
  return (
    <button
      className={`flex items-center gap-2 transition-all ease-in-out ${bg} ${bPad} ${bRad} ${color}`}
      onClick={onClick}
    >
      {icon}
      {name}
    </button>
  );
}

export default Button;
