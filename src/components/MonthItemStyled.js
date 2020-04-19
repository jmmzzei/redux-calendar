import styled from "styled-components";

export const MonthItemStyled = styled.article`
  border-radius: 10px;
  border: 1px solid black;
  min-height: 100px;
  padding: 10px;
  margin: 5px;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
    color: white;
    border: none;
  }
`;