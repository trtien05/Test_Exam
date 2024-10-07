import React from 'react';
import Todo from '../../components/Todo/Todo';
import { Typography } from 'antd';
import * as Styled from './TodoPage.styled';
const TodoPage = () => {
  return (
    <Styled.TodoContainer>
      <Typography.Title level={1}>Task Manager</Typography.Title>
      <Todo />
    </Styled.TodoContainer>
  );
};

export default TodoPage;
