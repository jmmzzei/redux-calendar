import styled from "styled-components"

export const NPBtnStyled = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  margin: 2rem;
  color: var(--secondary);
  background: var(--primary);
  border: 1.5px solid var(--secondary);
  font-weight: bold;
  font-size: 2rem;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    animation: bkg 0.3s ease forwards;
  }

  @keyframes bkg {
    100% {
      color: var(--dark);
      background: var(--light);
      border: 1.5px solid var(--light);
    }
  }
`
