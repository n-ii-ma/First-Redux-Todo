import { useSelector } from "react-redux";
import { selectTodoSlice } from "../todo/todoSlice";
import Todo from "../todo/Todo";

const TodoList = () => {
  const todoSlice = useSelector(selectTodoSlice);

  return (
    <ul className="list">
      {!todoSlice.length ? (
        <p>Nothing to Show</p>
      ) : (
        todoSlice.map((todo) => <Todo todo={todo} key={todo.id} />)
      )}
    </ul>
  );
};

export default TodoList;
