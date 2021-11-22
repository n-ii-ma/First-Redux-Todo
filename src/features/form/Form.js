import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todo/todoSlice";

const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    dispatch(addTodo(input));

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Add Todo"
        required
      />
      <button type="submit" className="add-todo">
        Add Todo
      </button>
    </form>
  );
};

export default Form;
