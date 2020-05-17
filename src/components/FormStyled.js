import styled from "styled-components"

export const FormStyled = styled.form`
  display: none;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
  animation: show 0.5s ease forwards;

  @keyframes show {
    0% {
      opacity: 0;
      transform: translateY(-2rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  h4 {
    margin: 0.2rem;
    color: var(--light);
  }

  input {
    border: none;
    background: var(--primary);
    color: var(--light);
    border-radius: 5px;
    width: 70%;
    margin: 0.2rem;
  }

  button {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: 1.3px solid var(--secondary);
    color: var(--secondary);
    background: var(--dark);
    font-weight: bold;

    :hover {
      animation: gradient 0.3s ease forwards;
    }

    @keyframes gradient {
      100% {
        color: var(--dark);
        border: 1.5px solid var(--light);
        background: var(--light);
      }
    }
  }
`
