import React, { useEffect, useState } from 'react';
import { createToDo, deleteTodo, fetchTodo, toggleComplete } from '../../services/todo';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';

export default function Todo() {
  const [todo, setTodo] = useState('');
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
      const resp = await createToDo(todo);
      alert('Todo created');
      setTodo('');
      setTodoList((prev) => [...prev, resp[0]]);
    } catch (e) {
      alert('Failed to created todo');
    }
  };

  const handleClick = async (task) => {
    await toggleComplete(task.id, !task.is_complete);
    const resp = await fetchTodo();
    setTodoList(resp);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
  };

  return (
    <div>
      <TodoList todoList={todoList} handleClick={handleClick} handleDelete={handleDelete} />
      <TodoForm todo={todo} handleSubmit={handleSubmit} setTodo={setTodo} />
    </div>
  );
}
