// src/components/Task.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Task from '../Task';

describe('Task Component', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    description: 'This is a test task',
    completed: false
  };

  const mockOnDelete = jest.fn();
  const mockOnComplete = jest.fn();

  beforeEach(() => {
    render(<Task task={mockTask} onDelete={mockOnDelete} onComplete={mockOnComplete} />);
  });

  test('renders task title and description', () => {
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('This is a test task')).toBeInTheDocument();
  });

  test('displays "Mark as Completed" button if task is not completed', () => {
    expect(screen.getByText('Mark as Completed')).toBeInTheDocument();
  });

  test('does not display "Mark as Completed" button if task is completed', () => {
    const completedTask = { ...mockTask, completed: true };
    render(<Task task={completedTask} onDelete={mockOnDelete} onComplete={mockOnComplete} />);
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  test('calls onComplete when "Mark as Completed" button is clicked', () => {
    fireEvent.click(screen.getByText('Mark as Completed'));
    expect(mockOnComplete).toHaveBeenCalled();
  });

  test('calls onDelete when "Delete" button is clicked', () => {
    fireEvent.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalled();
  });
});

