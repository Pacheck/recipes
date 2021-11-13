import React from 'react';

import { useNavbar } from '../../hooks/useNavbar';

import * as S from './styles';
export const Navbar = () => {
  const { about, recipes, subscribe, logo } = useNavbar();
  return (
    <S.Container>
      <S.Logo src={logo.url} alt="logo" />
      <S.LinksList>
        <S.ListItem>
          <S.NavigationLink>{about}</S.NavigationLink>
        </S.ListItem>
        <S.ListItem>
          <S.NavigationLink>{recipes}</S.NavigationLink>
        </S.ListItem>
        <S.ListItem>
          <S.NavigationLink>{subscribe}</S.NavigationLink>
        </S.ListItem>
      </S.LinksList>
    </S.Container>
  );
};
