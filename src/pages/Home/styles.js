import styled from "styled-components";


export const Container = styled.div`
  height: 250px;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  align-items: center;
  border: none;
  box-shadow: 0px 4px 10px rgba(0,0,0, 0.84);
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
  padding: 18px 20px;
  text-align: center;
  background: ${({theme}) => theme.colors.blue};
  margin-bottom: 50px;
`;