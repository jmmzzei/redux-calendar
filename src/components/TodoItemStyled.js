import styled from 'styled-components'

export const TodoItemStyled = styled.li`
  margin: 5px 0;
  opacity: 0;
  animation: addTodo 0.5s ease forwards;
  list-style: none;

  @keyframes addTodo {
    to{
      opacity: 1;
      transform: translateX(10px);
    }
  }

  button{
    border: none;
    margin: 0 5px;  
    width: 20px;
    height: 20px;
    border-radius: 50%;
    &:hover{
      animation: hover 0.3s ease forwards;
    }
  }
  @keyframes hover {
    to{
      color: white;
      background: red;
    }
  }
}
`
