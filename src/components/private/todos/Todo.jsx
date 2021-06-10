import React, { useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useRepo } from '@hooks';

export function Todo({ id, title, completed, handleDelete }) {
  const [isChecked, setIsChecked] = useState(completed);
  const { todosRepo } = useRepo();

  const handleCheck = async event => {
    const { checked } = event.currentTarget;

    setIsChecked(checked);

    try {
      await todosRepo.update({ id, completed: checked });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="p-3 flex justify-between items-center hover:bg-gray-50">
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          className="-mt-1 mr-3 h-5 w-5 rounded-full cursor-pointer"
        />
        <span className={isChecked ? 'line-through text-gray-400' : ''}>
          {title}
        </span>
      </div>
      <RiDeleteBin2Line
        title="Delete"
        className="text-xl text-gray-300 cursor-pointer hover:text-gray-400"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
