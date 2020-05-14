import styled from "styled-components";

export const CalendarStyled = styled.section`
  height: calc(100vh - 5rem - 5rem); 
  margin: 0;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(${props => props.month ? 6 : 4}, 1fr);
  grid-template-rows: repeat(${props => props.month ? 5 : 3}, 1fr);
  grid-gap: ${props => props.month ? 1 : 5}rem;
`;
