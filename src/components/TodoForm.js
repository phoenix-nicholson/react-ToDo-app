import React from 'react';

export default function TodoForm({ todo, setTodo, handleSubmit }) {
  return (
    <form className="form">
      <div className="form-controls">
        <label>Add a new task:</label>
        <input
          type="text"
          name="todo"
          placeholder="add new to-do"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit todo</button>
      </div>
    </form>
  );
}
