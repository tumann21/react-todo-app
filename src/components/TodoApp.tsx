import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoApp.scss';

export const TodoApp: React.FC = React.memo(() => {
  const { todos, setTodos } = useContext(TodoContext);
  const [title, setTitle] = useState('');

  const todoCreate = (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo = {
      id: +new Date(),
      title,
      completed: false,
    };

    if (!newTodo.title) {
      return;
    }

    setTodos([...todos, newTodo]);
    setTitle('');
  };

  return (
    <form onSubmit={todoCreate}>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value.trim());
        }}
        className="new-todo"
        data-cy="createTodo"
        placeholder="What needs to be done?"
      />
    </form>
  );
});
