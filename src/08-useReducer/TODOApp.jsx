import { TodoAdd } from "../components/ToDo/TodoAdd";
import { ToDoList } from "../components/ToDo/ToDoList";
import { useToDo } from "../hooks/useToDo";

export const TODOApp = () => {
  const { todos, todoCount, onAddTodo, onDeleteTodo, onToggleTodo } = useToDo();
  const { total, done, pending } = todoCount;
  return (
    <>
      <h1>TODOApp</h1>
      <h2>
        Total ({total}) Done ({done}) Pending({pending})
      </h2>
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
