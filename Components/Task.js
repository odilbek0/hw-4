import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleImportant, editTask } from '../redux/actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleImportant = () => {
    dispatch(toggleImportant(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask(task.id, newText));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewText(task.text);
    setIsEditing(false);
  };

  return (
    <table style={{ color: task.important ? 'red' : 'black' }}>
      <thead>
        <tr>
          <th>
          {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleToggleImportant}>Important</button>
        </>
      )}
          </th>
        </tr>
      
      </thead>
      
    </table>
  );
};

export default Task;
