import React from 'react';

import { useAbout } from '../../hooks/useAbout';

import { Container, Title, Subtitle, Image, Wrapper } from './styles';
export const About = () => {
  const { title, subtitle, background } = useAbout();
  return (
    <Container>
      <Image src={background.url} alt="lala" />
      <Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Wrapper>
    </Container>
  );
};
