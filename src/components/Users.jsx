import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import styled from "styled-components";

export const Users = () => {
  const { state } = useContext(TodoContext);
  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

  if (!state.data) {
    return;
  }

  return (
    <ContainerDiv>
      <h1>Users</h1>
      <StyledUl>
        {state.data.results.map((item) => (
          <StyledLi key={item.id}>
            <img src={item.image} alt="" />
            <StyledLiDiv>
              <h2>{item.name}</h2>
              <h3>
                {item.status} - {item.species}
              </h3>
              <h4>{item.location.name}</h4>
              <p>{item.gender}</p>
            </StyledLiDiv>
          </StyledLi>
        ))}
      </StyledUl>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h1 {
    color: #3f4f15;
    font-size: 40px;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

const StyledLi = styled.li`
  display: flex;
  width: 700px;
  gap: 20px;
  border: 2px solid #3f4f15;
`;

const StyledLiDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;

  h2 {
    color: #3f4f15;
    font-size: 40px;
  }

  h3 {
    color: #3f4f15;
    font-size: 30px;
    font-weight: 600;
  }

  h4 {
    color: #3f4f15;
    font-size: 21px;
    font-weight: 600;
  }

  p {
    color: #3f4f15;
    font-size: 17px;
    font-weight: 600;
  }
`;
