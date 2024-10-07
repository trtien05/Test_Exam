import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import { Tabs } from 'antd';
import { items } from '../../constant/index';

const FilterList = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState('All');

  const onChangeTab = (key) => {
    setFilter(key);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.status;
    if (filter === 'Incomplete') return !task.status;
    return true;
  });

  return (
    <>
      <Tabs defaultActiveKey="All" items={items} onChange={onChangeTab} />
      <TodoList tasks={filteredTasks} setTasks={setTasks} />
    </>
  );
};

export default FilterList;
