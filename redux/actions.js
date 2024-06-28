export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id
  });
  
  export const toggleImportant = (id) => ({
    type: 'TOGGLE_IMPORTANT',
    payload: id
  });
  
  export const editTask = (id, text) => ({
    type: 'EDIT_TASK',
    payload: { id, text }
  });
  