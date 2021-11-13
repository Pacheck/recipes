import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
`;

export const Container = styled.div``;

export const SubscribeContainer = styled.div`
  height: 20rem;
  width: 100%;
  background-color: #dfe4de;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #373737;
`;

export const Title = styled.h3``;
export const SubTitle = styled.p`
  font-size: 23px;
  font-weight: 300;
  margin-top: 1rem;
`;
export const Input = styled.input`
  width: 20rem;
  padding: 1.5rem 1rem;
  margin: 2rem 0rem;
`;
export const Button = styled.button`
  color: #333;
  padding: 1rem 2rem;
  border: 3px solid #333;
  background-color: transparent;

  :hover {
    cursor: pointer;
    background: #333;
    color: #eee;
  }
`;
