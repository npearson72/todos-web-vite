import React from 'react';
import { CgSpinner } from 'react-icons/cg';

export function Spinner() {
  return (
    <div className="flex justify-center mt-10 text-gray-400">
      <CgSpinner className="animate-spin" size={48} />
    </div>
  );
}
