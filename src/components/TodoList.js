import React from 'react';

export default function TodoList({ todoList }) {
  return (
    <div>
      <h2>List of to-dos</h2>
      {todoList.map((item) => (
        <ul key={item.id}>
          <li>
            <input type="checkbox" />
            {item.task}
          </li>
        </ul>
      ))}
    </div>
  );
}
