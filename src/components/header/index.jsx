import React from 'react';

import { useHeader } from '../../hooks/useHeader';

import { Container, Title } from './styled';
export const Header = ({ children }) => {
  const { title, background } = useHeader();
  return (
    <Container bgUrl={background.url}>
      {children} <Title>{title}</Title>
    </Container>
  );
};
