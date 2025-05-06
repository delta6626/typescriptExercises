enum Status {
  DONE = "done",
  IN_PROGRESS = "in-progress",
  TODO = "todo",
}

type ToDo = string;

interface TodoItem {
  id: number;
  title: ToDo;
  status: Status;
  completedOn?: Date;
}

const todoItems: TodoItem[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: Status.DONE,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: Status.IN_PROGRESS },
  { id: 3, title: "Write the best app in the world", status: Status.TODO },
];

function addTodoItem(todo: ToDo): TodoItem {
  const id = getNextId(todoItems);

  const newTodo: TodoItem = {
    id: id,
    title: todo,
    status: Status.TODO,
  };

  todoItems.push(newTodo);

  return newTodo;
}

function getNextId<T extends TodoItem>(items: T[]) {
  return items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1;
}

const newTodo = addTodoItem("This is a new to do");

console.log(JSON.stringify(newTodo));
