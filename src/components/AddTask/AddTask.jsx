import React, { useState } from 'react';
import * as Styled from './AddTask.styled';
import { Input, Button, Form } from 'antd';
import taskApi from '../../api/taskApi';
import { toast } from 'react-toastify';

const AddTask = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState('');

  const addTask = async () => {
    if (newTask.trim()) {
      try {
        const newTaskObj = { name: newTask, status: false };
        const response = await taskApi.add(newTaskObj);
        setTasks([response, ...tasks]);
        setNewTask('');
        toast.success('Task added successfully!');
      } catch (error) {
        console.error('Error adding task:', error);
        toast.error('Failed to add task. Please try again.');
      }
    }
  };

  return (
    <Styled.FormTask layout="inline" onFinish={addTask}>
      <Form.Item
        name="task"
        rules={[{ required: true, message: 'Please input a new task!' }]}
      >
        <Input
          style={{ width: '481px' }}
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Task
        </Button>
      </Form.Item>
    </Styled.FormTask>
  );
};

export default AddTask;
