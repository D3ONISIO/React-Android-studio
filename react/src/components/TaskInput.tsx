import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

interface Task {
  name: string;
  startHour: number;
  endHour: number;
}

type AddTaskFunction = React.Dispatch<React.SetStateAction<Task[]>>;

interface TaskInputProps {
  onAddTask: AddTaskFunction;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState<string>('');
  const [startHour, setStartHour] = useState<number>(0);
  const [endHour, setEndHour] = useState<number>(0);

  const handleAddTask = (): void => {
    const isValidInput =
      taskName.trim() !== '' &&
      startHour >= 0 &&
      startHour < 24 &&
      endHour > 0 &&
      endHour <= 24 &&
      endHour > startHour;

    if (!isValidInput) {
      alert('Coś się nie powiodło. Sprawdz czy dobrze wprowadzileś dane!');
      return;
    }

    console.log('Додавання завдання...');

    const newTask: Task = {
      name: taskName,
      startHour: startHour,
      endHour: endHour,
    };

    console.log('Нове завдання:', newTask);

    onAddTask((prevTasks) => {
      const updatedTasks = insertTask(newTask, prevTasks);
      return updatedTasks;
    });

    setTaskName('');
    setStartHour(0);
    setEndHour(0);
  };

  const insertTask = (newTask: Task, currentTasks: Task[]): Task[] => {
    const insertIndex = currentTasks.findIndex((task: Task) => task.endHour > newTask.endHour);

    if (insertIndex !== -1) {
      return [...currentTasks.slice(0, insertIndex), newTask, ...currentTasks.slice(insertIndex)];
    } else {
      return [...currentTasks, newTask];
    }
  };

  return (
    <Container>
      <h2 className="mt-3">Add Exercise</h2>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formTaskName">
            <Form.Label>Nazwa zadania:</Form.Label>
            <Form.Control type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formStartHour">
            <Form.Label>Początek:</Form.Label>
            <Form.Control as="select" value={startHour} onChange={(e) => setStartHour(Number(e.target.value))}>
              {Array.from({ length: 24 }).map((_, hour) => (
                <option key={hour} value={hour}>
                  {hour < 10 ? `0${hour}` : `${hour}`}:00
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formEndHour">
            <Form.Label>Koniec:</Form.Label>
            <Form.Control as="select" value={endHour} onChange={(e) => setEndHour(Number(e.target.value))}>
              {Array.from({ length: 24 }).map((_, hour) => (
                <option key={hour} value={hour}>
                  {hour < 10 ? `0${hour}` : `${hour}`}:00
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Row>
        <Button variant="primary" onClick={handleAddTask}>
          Dodaj zadanie
        </Button>
      </Form>
    </Container>
  );
};

export default TaskInput;
