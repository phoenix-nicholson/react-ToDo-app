import { client, checkError } from './client.js';

export async function createToDo(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function fetchTodo() {
  const resp = await client.from('todos').select('*').order('id', { ascending: true });
  return checkError(resp);
}

export async function toggleComplete(id, is_complete) {
  const resp = await client.from('todos').update({ is_complete: is_complete }).eq('id', id);
  return checkError(resp);
}

export async function deleteTodo(task) {
  const resp = await client.from('todos').delete().match({ id: task.id });
  return checkError(resp);
}
