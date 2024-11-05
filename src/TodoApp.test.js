// src/TodoApp.test.js
import { render, screen, fireEvent, act } from '@testing-library/react';
import TodoApp from './TodoApp.js';

test('renderiza el título y el input', () => {
  render(<TodoApp />);
  
  const titleElement = screen.getByText(/Lista de tareas/i);
  const inputElement = screen.getByLabelText(/Escribe una tarea/i);
  
  expect(titleElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test('actualiza el contador de tareas pendientes', () => {
  render(<TodoApp />);
  
  const inputElement = screen.getByLabelText(/Escribe una tarea/i); 
  const buttonElement = screen.getByText(/Agregar/i);

  // Usamos `act` de React y fireEvent para simular la entrada y el clic
  act(() => {
    fireEvent.change(inputElement, { target: { value: 'Nueva tarea' } });
    fireEvent.click(buttonElement);
  });
  
  // VerifICO QUE LA TAREA ESTE EN LA LISTA SELECCIONADA
  const newTaskElement = screen.getByText(/Nueva tarea/i);
  expect(newTaskElement).toBeInTheDocument();
});