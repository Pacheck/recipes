import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f4f1;
  text-align: center;
`;

export const Title = styled.h1`
  padding-top: calc(15vh + 2rem);
  padding-bottom: calc(2vh + 2rem);
  color: #373737;

  &:after {
    content: '';
    background-color: #373737;
    color: #373737;
    width: 6.5rem;
    height: 5px;
    position: absolute;
    bottom: -2%;
    left: calc(50% - 3.25rem);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const CardList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 1300px;
  width: 1200px;
  margin-bottom: calc(15vh + 20px);
  padding: 0;

  @media (max-width: 1052px) {
    justify-content: flex-start;
  }
`;
