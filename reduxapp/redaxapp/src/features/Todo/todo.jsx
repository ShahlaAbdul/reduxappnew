import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "./todoSlice";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);
  const [newTodo, setNewTodo] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);

  function handleAddTodo() {
    if (newTodo.trim() !== "") {
      dispatch(addTodo({ text: newTodo }));
      setNewTodo("");
    }
  }

  function handleEditTodo() {
    if (editText.trim() !== "" && editId !== null) {
      dispatch(editTodo({ id: editId, newText: editText }));
      setEditId(null);
      setEditText("");
    }
  }

  function handleRemoveTodo(todoId) {
    dispatch(removeTodo(todoId));
  }

  function handleStartEdit(todoId, todoText) {
    setEditId(todoId);
    setEditText(todoText);
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleEditTodo}>Save</button>
              </div>
            ) : (
              <div>
                {todo.text}
                <button onClick={() => handleStartEdit(todo.id, todo.text)}>
                  Edit
                </button>
                <button onClick={() => handleRemoveTodo(todo.id)}>
                  Remove
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default Todo;
