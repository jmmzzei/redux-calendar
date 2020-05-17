import styled, { css } from "styled-components"

export const DayItemStyled = styled.article`
  width: 100%;
  min-height: 5rem;
  max-height: 10rem;

  padding: 0.5rem;
  margin: 0;

  overflow-y: auto;
  overflow-x: hidden;
  word-break: break-word;
  border-radius: 1rem;
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

  :hover {
    background: var(--dark);
  }

  :hover > form {
    display: flex;
  }

  :hover p {
    display: none;
  }

  :hover ul p {
    display: none;
  }

  p {
    margin: 0;
    background: #00000020;
    color: var(--light);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
  }

  ul {
    margin: 0 2rem;
    padding: 0;
    color: var(--light);
  }
`
