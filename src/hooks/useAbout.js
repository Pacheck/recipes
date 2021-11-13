import { useStaticQuery, graphql } from 'gatsby';

export const useAbout = () => {
  const { alldata } = useStaticQuery(
    graphql`
      query {
        alldata {
          abouts {
            title
            subtitle
            background {
              url
            }
          }
        }
      }
    `
  );
  return alldata.abouts[0];
};
