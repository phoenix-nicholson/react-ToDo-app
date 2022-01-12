import React, { useEffect, useState } from 'react';
import { createToDo, fetchTodo } from '../../services/todo';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';

export default function Todo() {
  const [todo, setTodo] = useState({});
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodo();
      setTodoList(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createToDo(todo);
      alert('Todo created');
    } catch {
      alert('Failed to created todo');
    }
  };

  return (
    <div>
      <TodoList todoList={todoList} />
      <TodoForm todo={todo} handleSubmit={handleSubmit} setTodo={setTodo} />
    </div>
  );
}
