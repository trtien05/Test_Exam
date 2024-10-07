import React, { useEffect, useState } from 'react';
import taskApi from '../../api/taskApi';
import AddTask from '../AddTask/AddTask';
import FilterList from '../FilterList/FilterList';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await taskApi.getAll();
        setTasks(response);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <FilterList tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default Todo;
