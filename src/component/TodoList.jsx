import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/reduxslice/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.value);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      dispatch(addItem({ name: newTask }));
      setNewTask("");
    }
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input
          value={newTask}
          type="text"
          placeholder="add todo"
          onChange={handleInputChange}
        />
        <button type="submit">add</button>
      </form>

      {todos.map((todo) => (
        <div key={todo.id} className="todoList">
          <div>{todo.name}</div>
          <button onClick={() => dispatch(removeItem(todo.id))}>X</button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
