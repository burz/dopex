import styled from 'styled-components';


export const ButtonWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;

  .button-inner {
    padding: 10px 20px;
    background-color: transparent;
    border: 1px solid #cc0000;
    font-family: Montserrat, san-serif;
    font-size: 14px;
    color: #cc0000;
    height: auto;

    &:hover {
      background-color: #cc0000;
      color: #FFF;
      transition: 0.4s ease 0s;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    border-radius: 0;
  }
`;

export const ButtonInnerWrapper = styled.div`
  height: 20px;
`;
