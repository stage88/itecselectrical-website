import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  site: {
    siteMetadata: {
      title: string;
      name: string;
      companyName: string;
      description: string;
      longDescription: string;
      siteUrl: string;
      author: string;
      authorUrl: string;
      sourceUrl: string;
      siteImage: string;
      constactEmail: string;
      facebookUrl: string;
    };
  };
};

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          name
          companyName
          description
          longDescription
          siteUrl
          author
          sourceUrl
          siteImage
          authorUrl
          constactEmail
          facebookUrl
        }
      }
    }
  `);

  // console.log(data);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
