import React from 'react';

export default function todoList({ todoList }) {
  return (
    <div>
      <h2>List of to-dos</h2>
      {todoList.map((item) => (
        <div key={item.id}>{item.task}</div>
      ))}
    </div>
  );
}
