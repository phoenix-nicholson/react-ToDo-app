import React, { useEffect, useState } from 'react';
import { createToDo, fetchTodo, toggleComplete } from '../../services/todo';
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
    } catch (e) {
      alert('Failed to created todo');
    }
  };

  const handleClick = async (task) => {
    await toggleComplete(task.id, !task.is_complete);
    const resp = await fetchTodo();
    setTodoList(resp);
  };

  return (
    <div>
      <TodoList todoList={todoList} handleClick={handleClick} />
      <TodoForm todo={todo} handleSubmit={handleSubmit} setTodo={setTodo} />
    </div>
  );
}
