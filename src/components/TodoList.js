import React from 'react';

export default function TodoList({ todoList, handleClick, handleDelete }) {
  return (
    <div>
      <h2>List of to-dos</h2>
      {todoList.map((item) => (
        <ul key={item.id}>
          <li>
            <input
              type="checkbox"
              checked={item.is_complete}
              onChange={() => {
                handleClick(item);
              }}
            />

            {item.task}
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
