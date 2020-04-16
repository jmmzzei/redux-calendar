import styled from "styled-components";

export const CalendarStyled = styled.section`
  background: white;
  margin: 0;
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(${props => props.month ? 6 : 4}, 1fr);
  grid-template-rows: repeat(${props => props.month ? 5 : 3}, 1fr);
`;
