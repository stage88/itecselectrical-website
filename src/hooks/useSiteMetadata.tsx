type Props = {
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
  gtmId: string;
};

const useSiteMetadata = (): Props => {
  return {
    title: 'ITECS Electrical - Quality electrical services for Canberra, Queanbeyan, and surrounding areas',
    name: 'ITECS Electrical Services',
    companyName: 'ITECS Electrical Services Pty Ltd',
    description: 'Quality electrical services with professional experience',
    longDescription:
      'ITECS Electrical Services are leaders in providing quality electrical services for all kinds of residential, commercial, and rural projects. Servicing Canberra, Queanbeyan, and surrounding areas.',
    siteUrl: 'https://itecselectrical.com.au/',
    author: 'Sam Ilic',
    constactEmail: 'info@itecselectrical.com.au',
    mobile: '0416 044 804',
    abn: '35 166 390 512',
    acn: '166 390 512',
    actlic: '19925855 / 2014304',
    nswlic: '69565 / 269801C',
    aspl2: '5000074',
    nswacc: '3949',
    austel: 'A018461',
    authorUrl: 'https://github.com/stage88',
    sourceUrl: 'https://github.com/stage88/itecselectrical-website',
    siteImage: '/profile-photo-s.jpg',
    facebookUrl: 'https://www.facebook.com/itecselectrical/',
    gtmId: 'G-R8D9QBK9C9',
  };
};

export default useSiteMetadata;
