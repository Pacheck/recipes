import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  width: 20.5rem;
  height: 30rem;
  background: #fff;
  box-shadow: 0px 7px 6px #00000029;

  @media (max-width: 1052px) {
    flex-grow: 1;
    margin: 10px 5px;
  }
`;

export const Title = styled.h2``;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 0 81%;
  height: 15rem;
`;

export const InfoWrapper = styled.section`
  display: grid;
  place-items: center;
  height: 100%;
`;
