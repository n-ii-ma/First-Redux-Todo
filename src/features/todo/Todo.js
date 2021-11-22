import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from "./todoSlice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleComplete(todo.id));
  const handleRemove = () => dispatch(removeTodo(todo.id));

  return (
    <div className="list-items">
      <li className={todo.completed ? "completed" : ""}>{todo.text}</li>
      <button className="btn complete-btn" onClick={handleToggle}>
        Complete
      </button>
      <button className="btn remove-btn" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default Todo;
