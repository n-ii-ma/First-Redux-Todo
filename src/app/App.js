import Form from "../features/form/Form";
import TodoList from "../features/todoList/TodoList";
import "../reset.css";
import "../App.css";

function App() {
  return (
    <div className="App">
      <header>My Todos</header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
