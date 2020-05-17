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
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: white;
    border: none;
    background: var(--accent);
    font-weight: bold;

    :hover {
      animation: gradient 1s ease forwards;
    }

    @keyframes gradient {
      100% {
        background: linear-gradient(
          45deg,
          var(--accent),
          var(--secondary) 100%
        );
      }
    }
  }
`
