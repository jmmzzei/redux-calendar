import styled from "styled-components"

export const MonthItemStyled = styled.article`
  border-radius: 1rem;
  height: 100%;
  padding: 1rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark);
  opacity: 0;

  @keyframes app {
    0% {
      transform: translateY(-4px);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  p {
    text-decoration: none;
  }

  &:hover {
    transition: all 0.3s ease;
    background: var(--dark);
    color: var(--light);
  }
`
