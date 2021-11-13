module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Recipes',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'alldata',
        fieldName: 'alldata',
        url: 'https://api-us-east-1.graphcms.com/v2/ckvxugqij3q7901zad5oebf2u/master',
      },
    },
  ],
};
