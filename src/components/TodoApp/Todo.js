import React, { useEffect, useState } from "react";
import "./styles.css";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodo] = useState([{ id: "", value: "" }]);

  const addTodoClickHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    const generatedId = Math.floor(Math.random() * 1000);
    console.log(todos)
    setTodo((prevTodos) => [
      ...prevTodos,
      { id: generatedId, value: inputValue },
    ]);
    
  };

  const inputEdit = (e) => {
    if(e.key !== "Enter") {
        return;
    }
  }

  useEffect(() => {
    setInputValue("");
    console.log(todos)
  }, [todos]);

  return (
    <div className="container">
      <div className="inputBox">
        <input
          type="text"
          id="getTodoInput"
          placeholder="enter text here"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <span className="cross">x</span>
      </div>
      <button type="button" onClick={addTodoClickHandler}>
        Add Todo
      </button>
      {/* double click should enablr edit mode and single click on x should remove the todo item */}


      <ul id="todoListContainer" className="todoList">
        {
          todos.map((todo) => {
            return (
              <li key={todo.id}>
              <div className="inputBox">
                <input type="text" className="inputBox" id={todo.id} disabled="true" onKeyUp={inputEdit} value={todo.value} />
                <span className="cross">X</span>
              </div>
            </li>
            )
        })
        }
      </ul>
    </div>
  );
};

export default Todo;
