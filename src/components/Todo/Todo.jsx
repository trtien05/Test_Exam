import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <TodoList />
    </div>
  );
};

export default Todo;
