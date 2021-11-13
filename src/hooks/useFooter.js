import { useStaticQuery, graphql } from 'gatsby';

export const useFooter = () => {
  const { alldata } = useStaticQuery(
    graphql`
      query {
        alldata {
          footers {
            footerLinks
            facebook {
              url
            }
            instagram {
              url
            }
            twitter {
              url
            }
            pinterest {
              url
            }
          }
        }
      }
    `
  );
  return alldata.footers[0];
};
