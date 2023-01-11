import { Accessor, Component, Setter } from 'solid-js';
import { FormEvent } from '../types/types';

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setTodo: Setter<string>;
  todo: Accessor<string>;
};

const FormTodo: Component<Props> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} class="form-control gap-2">
      <label class="label">Lista tareas</label>
      <input
        type="text"
        class="input bg-base-200"
        value={props.todo()}
        placeholder="Add a Task"
        onChange={(e) => props.setTodo(e.currentTarget.value)}
      />
      <button class="btn btn-primary">Agregar</button>
    </form>
  );
};

export default FormTodo;
