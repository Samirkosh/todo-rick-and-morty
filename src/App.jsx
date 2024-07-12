import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { Users } from "./components/Users";
import { TodoProvider } from "./context/TodoContext";
import { Button } from "./ui/Button";
import styled from "styled-components";

function App() {
  const [showUsers, setShowUsers] = useState(false);

  const handleButtonClick = () => {
    setShowUsers((showUsers) => !showUsers);
  };
  return (
    <TodoProvider>
      <StyledDivMain>
        <Button onClick={handleButtonClick}>
          {showUsers ? "Show Todo List" : "Show Users"}
        </Button>
        {showUsers ? <Users /> : <TodoForm />}
      </StyledDivMain>
    </TodoProvider>
  );
}

export default App;

const StyledDivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
