import React from 'react';

export function TodoList({ children }) {
  return (
    <div>
      {children.length ? (
        <div className="flex flex-col divide-y divide-gray-200">{children}</div>
      ) : (
        <div className="flex justify-center mt-6">No todos!</div>
      )}
    </div>
  );
}
