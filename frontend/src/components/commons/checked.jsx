import React from "react";

const Checked = props => {
  const { todo, handleMarkTodo } = props;

  if (todo.checked) {
    return (
      <i
        className={"fas fa-check-circle"}
        style={{ cursor: "pointer", color: "green" }}
        onClick={handleMarkTodo}
      />
    );
  }

  return (
    <i
      className={"fas fa-check-circle"}
      style={{ cursor: "pointer" }}
      onClick={handleMarkTodo}
    />
  );
};

export default Checked;
