import { Button } from "../ui/Button";
import { TodoList } from "./TodoList";
import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoForm = () => {
  const { state, submitHandler, changeHandler } = useContext(TodoContext);
  return (
    <StyledDiv>
      <h1>Todo List</h1>
      <StyledForm onSubmit={submitHandler}>
        <input
          type="text"
          value={state.title}
          onChange={changeHandler}
          placeholder="Enter..."
        />
        <Button type="submit">
          {state.updating ? "Update Todo" : "Add Todo"}
        </Button>
      </StyledForm>
      <ul>
        {state.todos.map((todo) => (
          <TodoList key={todo.id} todo={todo} />
        ))}
      </ul>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  h1 {
    color: #3f4f15;
    font-size: 40px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  gap: 30px;

  input {
    width: 600px;
    height: 50px;
    border-radius: 12px;
    border: 2px solid #858423;
    background-color: #feeebf;
    color: #858423;
    padding-left: 20px;
    font-size: 21px;
  }

  button {
    width: 100px;
    border-radius: 12px;
    border: 2px solid #858423;
    background-color: #ffde90;
    font-size: 18px;
    color: #3f4f15;
  }
`;
