import React from "react";

const Delete = props => {
  const { handleDeleteTodo } = props;
  return (
    <React.Fragment>
      <i
        className="far fa-trash-alt"
        style={{ cursor: "pointer", color: "red" }}
        onClick={handleDeleteTodo}
      />
    </React.Fragment>
  );
};

export default Delete;
