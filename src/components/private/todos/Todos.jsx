import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { useRepo } from '@hooks';
import { Spinner } from '@components/loaders';

export function Todos() {
  const { todosRepo } = useRepo();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllTodos = async () => {
      try {
        setLoading(true);
        const results = await todosRepo.getAll();

        setTodos(results);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAllTodos();
  }, []);

  const handleDelete = async id => {
    setTodos(todos.filter(todo => todo.id !== id));

    try {
      await todosRepo.delete(id);
    } catch (err) {
      console.error(err.message);
    }
  };

  const todoList = (
    <TodoList>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} handleDelete={handleDelete} />
      ))}
    </TodoList>
  );

  return (
    <div className="max-w-3xl">
      <TodoForm todos={todos} setTodos={setTodos} />
      {loading ? <Spinner /> : todoList}
    </div>
  );
}
