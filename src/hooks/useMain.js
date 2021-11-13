import { useStaticQuery, graphql } from 'gatsby';

export const useMain = () => {
  const { alldata } = useStaticQuery(
    graphql`
      query {
        alldata {
          mains {
            recipeTitle
            latedRecipesContent
          }
        }
      }
    `
  );
  return alldata.mains[0];
};
