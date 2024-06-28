import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import classes from './Tasks.module.css'

const TaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask({ id: Date.now(), text: taskText, important: false }));
      setTaskText('');
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h1 className={classes.h1}>To-Do List</h1>
      <input className={classes.input}
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Напиши новый задание"
      />
      <button className={classes.btn} type="submit">Добавить</button>
    </form>
  );
};

export default TaskForm;
