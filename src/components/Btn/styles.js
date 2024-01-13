import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: none;
  border-radius: 25px;
  padding: 5px;
  background: ${({theme}) => theme.btn};
`;

