import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// Get from Local Storage
const preloadedState = localStorage.getItem("reduxTodo")
  ? JSON.parse(localStorage.getItem("reduxTodo"))
  : {};

// Store
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState,
});

// Save to Local Storage
store.subscribe(() => {
  localStorage.setItem("reduxTodo", JSON.stringify(store.getState()));
});

export default store;
