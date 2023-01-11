import { Component, createEffect, createSignal } from 'solid-js';
import type { FormEvent, Todo } from './types/types';
import FormTodo from './components/FormTodo';
import ListTodo from './components/ListTodo';

const App: Component = () => {
  const initialState = JSON.parse(
    localStorage.getItem('todos') ?? '[]'
  ) as Todo[];
  const [todo, setTodo] = createSignal<string>('');
  const [todos, setTodos] = createSignal<Todo[]>(initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo().trim().length === 0) return;

    setTodos([...todos(), { id: crypto.randomUUID(), title: todo() }]);
    setTodo('');
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos().filter((todo) => todo.id !== id));
  };

  createEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos()));
    console.log({ todos: todos() });
  });

  return (
    <main class="container mx-auto px-[10px] sm:px-[100px] md:px-[150px] lg:px-[250px] xl:px-[350px]">
      <FormTodo handleSubmit={handleSubmit} setTodo={setTodo} todo={todo} />

      <ListTodo
        setTodos={setTodos}
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
      />
    </main>
  );
};

export default App;
