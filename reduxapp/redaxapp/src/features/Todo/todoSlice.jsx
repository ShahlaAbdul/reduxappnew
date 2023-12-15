
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { list: [] },
  reducers: {
    addTodo: (state, action) => {
   
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      state.list = state.list.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      );
    },
    removeTodo: (state, action) => {

    },
  },
});

export const { addTodo, editTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
