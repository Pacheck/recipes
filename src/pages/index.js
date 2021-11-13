import React from 'react';

//components
import { Navbar } from '../components/navbar';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { About } from '../components/about';

import * as S from './styles';

export default function HomePage() {
  return (
    <S.Container>
      <Header>
        <Navbar />
      </Header>
      <Main />
      <About />
      <S.SubscribeContainer>
        <S.Title>SUBSCRIBE</S.Title>
        <S.SubTitle>Sign up for newsletter</S.SubTitle>
        <S.Input placeholder="Your Email" type="text" />
        <S.Button>SUBMIT</S.Button>
      </S.SubscribeContainer>
      <S.GlobalStyle />
    </S.Container>
  );
}
