import type { MetadataRoute } from 'next';

import getSiteMetadata from '@/lib/site';

export const dynamic = 'force-static';

const sitemap = (): MetadataRoute.Sitemap => {
  const { siteUrl } = getSiteMetadata();
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
};

export default sitemap;
