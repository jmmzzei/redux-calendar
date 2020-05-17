import styled from "styled-components"

export const HomeBtnStyled = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  margin: 3rem;
  background: var(--accent);
  color: var(--dark);
  font-weight: bold;

  :hover {
    animation: gradient 1s ease forwards;
  }

  @keyframes gradient {
    100% {
      background: linear-gradient(45deg, var(--accent), var(--secondary) 160%);
    }
  }
`
