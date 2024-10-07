import React from 'react';
import { List, Checkbox } from 'antd';
import * as Styled from './TodoList.styled';

const TodoList = ({ tasks, setTasks }) => {
  const toggleComplete = (id, e) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: e.target.checked };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div>
      <Styled.TutorList
        bordered
        pagination={{
          position: 'bottom',
          align: 'center',
          pageSize: 5,
        }}
        align
        dataSource={tasks}
        renderItem={(task) => (
          <Styled.TutorItem
            key={task.id}
            actions={[
              <Checkbox
                defaultChecked={task.status}
                onChange={(e) => toggleComplete(task.id, e)}
              ></Checkbox>,
            ]}
          >
            <List.Item.Meta title={<p>{task.name}</p>} />
          </Styled.TutorItem>
        )}
      />
    </div>
  );
};

export default TodoList;
