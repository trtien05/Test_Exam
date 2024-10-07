import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './../TodoList';

describe('TodoList Component', () => {
  const mockSetTasks = jest.fn();
  const tasks = [
    { name: 'Dahlia Estates', status: true, id: '1' },
    { name: 'Danial Courts', status: false, id: '2' },
    { name: 'Bogan Freeway', status: true, id: '3' },
    { name: 'Oberbrunner Spring', status: false, id: '4' },
  ];

  it('should render a list of tasks', () => {
    render(<TodoList tasks={tasks} setTasks={mockSetTasks} />);

    expect(screen.getByText('Dahlia Estates')).toBeInTheDocument();
    expect(screen.getByText('Danial Courts')).toBeInTheDocument();
    expect(screen.getByText('Bogan Freeway')).toBeInTheDocument();
    expect(screen.getByText('Oberbrunner Spring')).toBeInTheDocument();
  });

  it('should call setTasks when a checkbox is clicked', () => {
    render(<TodoList tasks={tasks} setTasks={mockSetTasks} />);

    const firstTaskCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(firstTaskCheckbox);

    expect(mockSetTasks).toHaveBeenCalledTimes(1);
  });

  it('should update the checkbox status based on task status', () => {
    render(<TodoList tasks={tasks} setTasks={mockSetTasks} />);

    const checkboxes = screen.getAllByRole('checkbox');

    expect(checkboxes[0]).toBeChecked(); // Dahlia Estates
    expect(checkboxes[1]).not.toBeChecked(); // Danial Courts
    expect(checkboxes[2]).toBeChecked(); // Bogan Freeway
    expect(checkboxes[3]).not.toBeChecked(); // Oberbrunner Spring
  });
});
