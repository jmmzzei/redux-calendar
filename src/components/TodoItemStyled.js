import styled from "styled-components"

export const TodoItemStyled = styled.li`
  margin: 5px 0;
  opacity: 0;
  list-style: none;
  animation: addTodo 0.5s ease forwards;

  @keyframes addTodo {
    to{
      opacity: 1;
      transform: translateX(10px);
    }
  }

  :hover button {
    opacity: 1;
    transition: opacity 1s ease; 
  }

    button{
    opacity: 0;
    border: none;
    margin: 0 5px;  
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: var(--secondary);
    font-weight: bold;
    
    &:hover{
      animation: hover 0.3s ease forwards;
    }
  }
  
  @keyframes hover {
    to{
      color: var(--secondary);
      background: black;
    }
  }
}
`
