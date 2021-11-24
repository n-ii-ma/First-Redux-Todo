import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Selector
export const selectTodoSlice = (state) => state.todo;

// Actions
export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

// Reducers
export default todoSlice.reducer;
