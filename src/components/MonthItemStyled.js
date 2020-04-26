import styled from "styled-components";

export const MonthItemStyled = styled.article`
  border-radius: 10px;
  min-height: 100px;
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  p{
     text-decoration: none;
  }

  &:hover{
    animation: show 0.3s ease forwards; 
  }

  @keyframes show {
    to{
      box-shadow: 0 0 0.3em ${props => '#0000' + props.x};
    }
  }

`;
