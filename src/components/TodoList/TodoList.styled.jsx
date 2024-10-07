import styled from 'styled-components';
import { List } from 'antd';

export const TaskList = styled(List)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  &.ant-list .ant-list-items {
    display: block;
  }
`;
export const TaskItem = styled(List.Item)`
  &.ant-list-item {
    display: flex;
  }
`;
