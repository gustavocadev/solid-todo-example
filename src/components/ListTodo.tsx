import { Accessor, Component, For } from 'solid-js';
import { Todo } from '../types/types';

type Props = {
  setTodos: (todos: string[]) => void;
  todos: Accessor<Todo[]>;
  handleDeleteTodo: (id: string) => void;
};

const ListTodo: Component<Props> = ({ todos, handleDeleteTodo }) => {
  return (
    <section class="flex flex-col gap-3 my-4">
      <For each={todos()}>
        {(todo) => {
          return (
            <div class="card bg-base-300">
              <div class="card-body flex-row justify-between">
                <h2 class="card-title">{todo.title}</h2>

                <div class="card-actions">
                  <button
                    class="btn bg-red-500"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </For>
    </section>
  );
};

export default ListTodo;
