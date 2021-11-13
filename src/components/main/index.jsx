import React from 'react';

import { useMain } from '../../hooks/useMain';

import { CardItem } from './components/card-item';

import * as S from './styles.js';

export const Main = () => {
  const { recipeTitle, latedRecipesContent } = useMain();

  return (
    <S.Container>
      <S.Title>{recipeTitle}</S.Title>
      <S.CardWrapper>
        <S.CardList>
          {latedRecipesContent.map((recipe) => {
            return <CardItem {...recipe} key={recipe.url} />;
          })}
        </S.CardList>
      </S.CardWrapper>
    </S.Container>
  );
};
