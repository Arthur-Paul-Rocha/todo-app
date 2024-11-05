
import React, { useState } from 'react';
import { Button, TextField, List, ListItem, Typography } from '@mui/material';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Lista de tareas
      </Typography>
      <TextField
        label="Escribe una tarea"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Agregar
      </Button>
      <List>
        {tasks.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => handleToggleTask(index)}
            style={{
              textDecoration: item.completed ? 'line-through' : 'none',
              color: item.completed ? 'red' : 'black'
            }}
          >
            {item.text}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoApp;