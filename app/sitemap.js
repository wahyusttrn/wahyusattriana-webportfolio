import { profile } from '@/data/profile';

export default function sitemap() {
  return [
    { url: profile.website, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${profile.website}/cv`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 }
  ];
}
