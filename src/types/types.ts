export type FormEvent<T> = Event & {
  submitter: HTMLElement;
} & {
  currentTarget: T;
  target: Element;
};

export type Todo = {
  id: string;
  title: string;
};
