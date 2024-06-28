import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import {Table} from 'react-bootstrap'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <Table>
    
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Table>
  );
};

export default TaskList;
