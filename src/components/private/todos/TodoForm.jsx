import React, { useState } from 'react';
import { useRepo } from '@hooks';

const randomPlaceholder = () => {
  const texts = [
    'What needs doing?',
    'Add another one',
    'Got something to do?',
    'Baby steps...'
  ];

  const random = Math.floor(Math.random() * texts.length);

  return texts[random];
};

export function TodoForm({ todos, setTodos }) {
  const [title, setTitle] = useState('');
  const [placeholder, setPlaceholder] = useState({
    value: 'Add a todo',
    color: 'placeholder-gray-500'
  });

  const { todosRepo } = useRepo();

  const handleFocus = () => {
    setPlaceholder({ ...placeholder, color: 'placeholder-gray-200' });
  };

  const handleBlur = () => {
    setPlaceholder({
      value: randomPlaceholder(),
      color: 'placeholder-gray-500'
    });
  };

  const handleKeyUp = async () => {
    if (event.key === 'Enter') {
      try {
        const newTodo = await todosRepo.create({ title });

        setTodos([...todos, newTodo]);
      } catch (err) {
        console.error(err.message);
      } finally {
        setTitle('');
        setPlaceholder({ ...placeholder, value: randomPlaceholder() });
      }
    }
  };

  return (
    <input
      type="text"
      value={title}
      className={`${placeholder.color} mb-3 rounded-md`}
      placeholder={placeholder.value}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={e => setTitle(e.target.value)}
      onKeyUp={handleKeyUp}
    />
  );
}
