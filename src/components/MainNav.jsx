import React from 'react';

export function MainNav({ children }) {
  return (
    <>
      <div className="bg-gray-400 py-2 px-4 mb-4 flex justify-between">
        <div className="text-xl font-medium text-white">Todos</div>
        {children}
      </div>
    </>
  );
}
