import React from "react";
import AddTodo from "./addTodo";
const Header = props => {
  const { handleAddTodo } = props;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="alert alert-primary alert-sm" role="alert">
        TodoLists
      </div>
      <AddTodo handleAddTodo={handleAddTodo} />
    </div>
  );
};

export default Header;
