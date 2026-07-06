type SiteMetadata = {
  title: string;
  name: string;
  companyName: string;
  description: string;
  siteUrl: string;
  gtmId: string;
};

const getSiteMetadata = (): SiteMetadata => {
  return {
    title: 'ITECS Electrical Services',
    name: 'ITECS Electrical Services',
    companyName: 'ITECS Electrical Services Pty Ltd',
    description: 'ITECS Electrical Services is no longer operating.',
    siteUrl: 'https://itecselectrical.com.au/',
    gtmId: 'G-R8D9QBK9C9',
  };
};

export default getSiteMetadata;
