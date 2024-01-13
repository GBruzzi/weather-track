import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  input {
    margin-top: 50px;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.84);
    width: 100%;
    max-width: 600px;
    height: 100px;
    background: ${({ theme }) => theme.colors.blue};
    margin-bottom: 100px;
    padding: 0px 20px;
    outline: 0;
  }
`;
