import React from "react";

//object representing the props
const Todos = ({ todos, deleteToDo }) => {
  //if we actually have a to do
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteToDo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
