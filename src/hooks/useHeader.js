import { useStaticQuery, graphql } from 'gatsby';

export const useHeader = () => {
  const { alldata } = useStaticQuery(
    graphql`
      query {
        alldata {
          headers {
            title
            background {
              url
            }
          }
        }
      }
    `
  );
  return alldata.headers[0];
};
