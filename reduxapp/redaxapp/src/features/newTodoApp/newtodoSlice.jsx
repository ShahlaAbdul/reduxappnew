// import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from "uuid";

// const newTodoSlice = createSlice({
//   name: "newTodos",
//   initialState: {
//     value: [],
//   },
//   reducers: {
//     addNewTodo: (state, action) => {
//       const { text } = action.payload;
//       const newAddedTodo = state.value.find((x) => x.text === text);
//       if (!newAddedTodo.text && text.trim() !== "") {
//         state.value.push({ id: uuidv4, text });
//       }
//     },
//     editNewTodo: (state, action) => {
//       const { id, newText } = action.payload;
//       const TodoEdit = state.value.find((x) => x.id === id);
//       if (TodoEdit) {
//         TodoEdit.text = newText;
//       }
//     },
//     removeFromTodo: (state, action) => {
//       state.value = state.value.filter((x) => x.id !== action.payload);
//     },
//   },
// });
// export const { addTodo, editTodo, removeTodo } = newTodoSlice.actions;
// export default newTodoSlice.reducer;