import { useStaticQuery, graphql } from 'gatsby';

export const useNavbar = () => {
  const { alldata } = useStaticQuery(
    graphql`
      query MyQuery {
        alldata {
          navbars {
            about
            recipes
            subscribe
            logo {
              url
            }
          }
        }
      }
    `
  );
  return alldata.navbars[0];
};
