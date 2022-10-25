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
      mobile: string;
      facebookUrl: string;
      abn: string;
      acn: string;
      actlic: string;
      nswlic: string;
      aspl2: string;
      austel: string;
      nswacc: string;
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
          mobile
          facebookUrl
          abn
          acn
          actlic
          nswlic
          aspl2
          austel
          nswacc
        }
      }
    }
  `);

  // console.log(data);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
