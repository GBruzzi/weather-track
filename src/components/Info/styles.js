import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 100%;
  max-width: 600px;
  display: block;
  text-align: center;
  border: none;
  box-shadow: 0px 4px 10px rgba(0,0,0, 0.84);
  border-radius: 25px;
  padding: 5px;
  background: ${({theme}) => theme.colors.blue};
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;

  h1 {
    margin-top: 20px;
    font-size: 30px;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px;

  img {
    width: 30px;
    height: 30px;
  }
`;