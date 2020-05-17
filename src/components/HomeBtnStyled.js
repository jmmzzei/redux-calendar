import styled from "styled-components"

export const HomeBtnStyled = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  margin: 3rem;
  background: var(--light);
  color: var(--dark);
  font-weight: bold;

  :hover {
    animation: color 0.3s ease forwards;
  }

  @keyframes color {
    100% {
      background: var(--secondary);
      color: var(--light);
    }
  }
`
