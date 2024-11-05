import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renderiza el título de la lista de tareas', () => {
  render(<App />);
  
  
  const titleElement = screen.getByRole('heading', { level: 1 }); 
  const titleText = screen.getByText(/Listado de tareas/i); 

  expect(titleElement).toBeInTheDocument();
  expect(titleText).toBeInTheDocument();
});