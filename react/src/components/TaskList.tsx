import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, ListGroup, Button } from 'react-bootstrap';

interface Task {
  name: string;
  number1: number;
  number2: number;
}

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  const handleDelete = (index: number) => {
    onDeleteTask(index);
  };

  return (
    <Container className="mt-4">
      <h2>Lista Zadan:</h2>
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <div>
              {`~ ${task.name} ~ ${task.number1}:00 - ${task.number2}:00`}
            </div>
            <Button variant="danger" onClick={() => handleDelete(index)}>
              Usuń
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
