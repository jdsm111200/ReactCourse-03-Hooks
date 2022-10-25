import { TodoAdd } from "../components/ToDo/TodoAdd";
import { ToDoList } from "../components/ToDo/ToDoList";
import { useToDo } from "../hooks/useToDo";

export const TODOApp = () => {
  const { todos, onAddTodo, onDeleteTodo, onToggleTodo } = useToDo();

  return (
    <>
      <h1>TODOApp</h1>
      <h2>Total () Undone () Done()</h2>
      <hr />
      <div className="row">
        <div className="col-7">
          <ToDoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <TodoAdd onAddTodo={onAddTodo} />
        </div>
      </div>
    </>
  );
};
