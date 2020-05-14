import styled from 'styled-components'

export const DayItemStyled = styled.article`
  border-radius: 1rem;
  border: 1px solid lightgrey;

  :hover > form{
    display: flex; 
  }

  min-height: 10rem;
  max-height: 10rem;
  padding: 0.5rem;
  
  overflow-y: auto;
  overflow-x: hidden;
  word-break: break-all; 

  ul{
    margin: 0 2rem;
    padding: 0;
  }

`
