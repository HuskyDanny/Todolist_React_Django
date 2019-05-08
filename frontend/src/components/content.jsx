import React from "react";
import Checked from "./commons/checked";
import Delete from "./commons/delete";
const Content = props => {
  const { todos, handleMarkTodo, handleDeleteTodo } = props;

  return (
    <div
      style={{
        justifyContent: "center",
        margin: "0 5% 0 5%",
        textAlign: "center"
      }}
    >
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>

            <th scope="col">Todos</th>
            <th>Completed</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <th scope="row">{index + 1}</th>
              <td>{todo.checked ? <strike>{todo.body}</strike> : todo.body}</td>

              <td>
                <Checked
                  key={todo.id}
                  todo={todo}
                  handleMarkTodo={() => handleMarkTodo(todo)}
                />
              </td>
              <td>
                <Delete
                  key={todo.id}
                  handleDeleteTodo={() => handleDeleteTodo(todo)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
