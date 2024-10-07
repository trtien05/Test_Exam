import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterList from '../FilterList';
import TodoList from '../../TodoList/TodoList';

jest.mock('../../TodoList/TodoList');

describe('FilterList Component', () => {
  const mockSetTasks = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Tabs and TodoList components', () => {
    const tasks = [
      { name: 'Dahlia Estates', status: true, id: '1' },
      { name: 'Danial Courts', status: false, id: '2' },
    ];

    render(<FilterList tasks={tasks} setTasks={mockSetTasks} />);

    expect(screen.getByText(/all/i)).toBeInTheDocument();
    expect(screen.getByText(/completed/i)).toBeInTheDocument();
    expect(screen.getByText(/incomplete/i)).toBeInTheDocument();
  });

  it('should filter tasks based on the selected tab', () => {
    const tasks = [
      { name: 'Dahlia Estates', status: true, id: '1' },
      { name: 'Danial Courts', status: false, id: '2' },
    ];

    render(<FilterList tasks={tasks} setTasks={mockSetTasks} />);

    const completedTab = screen.getByText(/completed/i);
    fireEvent.click(completedTab);

    expect(TodoList).toHaveBeenCalledWith(
      { tasks: [tasks[0]], setTasks: mockSetTasks },
      {},
    );

    const incompleteTab = screen.getByText(/incomplete/i);
    fireEvent.click(incompleteTab);

    expect(TodoList).toHaveBeenCalledWith(
      { tasks: [tasks[1]], setTasks: mockSetTasks },
      {},
    );
  });

  it('should show all tasks when the All tab is selected', () => {
    const tasks = [
      { name: 'Dahlia Estates', status: true, id: '1' },
      { name: 'Danial Courts', status: false, id: '2' },
    ];

    render(<FilterList tasks={tasks} setTasks={mockSetTasks} />);

    const allTab = screen.getByText(/all/i);
    fireEvent.click(allTab);

    expect(TodoList).toHaveBeenCalledWith({ tasks: tasks, setTasks: mockSetTasks }, {});
  });
});
