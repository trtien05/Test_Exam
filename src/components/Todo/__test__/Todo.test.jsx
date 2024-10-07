import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from '../Todo';
import taskApi from '../../api/taskApi';

jest.mock('../../api/taskApi');

describe('Todo Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render AddTask and FilterList components', () => {
    render(<Todo />);

    expect(screen.getByText(/add task/i)).toBeInTheDocument();
    expect(screen.getByText(/filter list/i)).toBeInTheDocument();
  });

  it('should fetch tasks on component mount', async () => {
    const tasks = [
      { name: 'Dahlia Estates', status: true, id: '1' },
      { name: 'Danial Courts', status: false, id: '2' },
    ];

    taskApi.getAll.mockResolvedValue(tasks);

    render(<Todo />);

    await waitFor(() => {
      expect(taskApi.getAll).toHaveBeenCalledTimes(1);
      expect(screen.getByText('Dahlia Estates')).toBeInTheDocument();
      expect(screen.getByText('Danial Courts')).toBeInTheDocument();
    });
  });

  it('should handle API errors gracefully', async () => {
    taskApi.getAll.mockRejectedValue(new Error('Failed to fetch'));

    render(<Todo />);

    await waitFor(() => {
      expect(taskApi.getAll).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByText(/add task/i)).toBeInTheDocument();
  });
});
