import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Button } from "../ui/Button";
import styled from "styled-components";

export const TodoList = ({ todo }) => {
  const { deleteHandler, updateHandler } = useContext(TodoContext);

  return (
    <StyledUl>
      <StyledLi>
        {todo.title}
        <div>
          <Button onClick={() => updateHandler(todo)}>Update</Button>
          <Button onClick={() => deleteHandler(todo.id)}>Delete</Button>
        </div>
      </StyledLi>
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  height: 80px;
`;

const StyledLi = styled.li`
  width: 725px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #ffde90;
  border-radius: 12px;
  align-items: center;
  padding: 0 20px 0 20px;
  font-size: 21px;
  color: #3f4f15;
  border: 2px solid #3f4f15;

  button {
    width: 100px;
    height: 35px;
    border-radius: 12px;
    border: 2px solid #858423;
    background-color: #feeebf;
    font-size: 18px;
    color: #3f4f15;
    margin: 10px;
  }
`;
