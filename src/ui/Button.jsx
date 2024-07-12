import React from "react";
import styled from "styled-components";

export const Button = ({ children, onClick }) => {
  return <Stylebtn onClick={onClick}>{children}</Stylebtn>;
};

const Stylebtn = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 12px;
  border: 2px solid #858423;
  background-color: #ffde90;
  font-size: 18px;
  color: #3f4f15;
`;
