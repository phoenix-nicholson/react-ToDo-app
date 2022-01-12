import React from 'react';

export default function TodoForm({ setTodo, handleSubmit }) {
  return (
    <form className="form">
      <div className="form-controls">
        <label>Add a new task:</label>
        <input
          type="text"
          name="todo"
          onChange={(e) => {
            setTodo('todo', e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit todo</button>
      </div>
    </form>
  );
}
