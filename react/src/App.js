import React, { useState } from 'react';
import TaskInput from 'C:/Users/ASUS/OneDrive/Робочий стіл/BART/react/project/src/components/TaskInput';
import TaskList from 'C:/Users/ASUS/OneDrive/Робочий стіл/BART/react/project/src/components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
