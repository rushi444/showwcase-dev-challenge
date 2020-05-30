import styled from 'styled-components'

export const Button = styled.button`
  background-color: white;
  color: #646df6;
  border: none;
  width: 6rem;
  height: 2rem;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: -0.31px 1.98px 5px 0px rgba(153, 153, 151, 0.6);
  transition: 0.3s;
  :hover {
    color: white;
    background-color: #646df6;
  }
  :focus {
    outline: none;
  }
`;

Button.displayName = 'Button'

