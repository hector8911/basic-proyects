import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import TodoCard from './TodoCard';

const Todos = (props) => {
  const classes = props.classes;
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((resp) => {
      const data = resp.data.slice(0, 20);
      setTodos(data);
    });
  }, []);

  return (
    <Fragment>
      {todos &&
        todos.map((todo) => {
          return <TodoCard classes={classes} key={todo.id} todo={todo} />;
        })}
    </Fragment>
  );
};

const Todo = (props) => {
  const { id } = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((resp) => {
      const data = resp.data;
      setDetail(data);
    });
  }, [id]);

  return (
    <Fragment>
      { detail &&
        <TodoCard todo={detail} single='true' classes={props.classes} />
      }
    </Fragment>
  );
}

export { Todo };
export default Todos;

