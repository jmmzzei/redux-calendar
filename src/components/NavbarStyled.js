import styled from "styled-components"

export const NavbarStyled = styled.nav`
  color: var(--light);
  background: var(--dark);
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 5rem;
  margin: 0;
  padding: 4rem 0;

  overflow: hidden;

  div {
    width: 100%;
    text-align: center;
  }

  span {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    position: relative;
    opacity: 0;
    animation: opac 2s ease forwards;
  }

  span:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    border: 3px solid var(--dark);
    border-left: 3px solid var(--light);
    background: var(--dark);
    animation: move 2s cubic-bezier(0.55, 0.33, 0.02, 1.06) forwards;
  }

  @keyframes move {
    50% {
      border-left: 3px solid var(--light);
    }
    80% {
      border-left: 3px solid var(--dark);
    }
    100% {
      border: 3px solid var(--dark);
      transform: translateX(102%);
    }
  }

  @keyframes opac {
    100% {
      opacity: 1;
    }
  }
`
