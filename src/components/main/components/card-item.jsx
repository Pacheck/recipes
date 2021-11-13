import React from 'react';

import { Container, Title, Image, InfoWrapper } from './styles';

export const CardItem = ({ name, url }) => {
  return (
    <Container>
      <Image src={url} alt="bla bla" />
      <InfoWrapper>
        <Title>{name}</Title>
      </InfoWrapper>
    </Container>
  );
};
