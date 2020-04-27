import styled from 'styled-components'

export const FormStyled = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    
    h4{
      margin: 2px;
    }

    input{
      border: none;
      background: lightgrey;
      border-radius: 5px; 
      width: 70%;
      margin: 2px;
    }
    
    button {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      color: white;
      border: none;
      background: lightgrey;

      :hover{
        background: black;
      }
    }

`
