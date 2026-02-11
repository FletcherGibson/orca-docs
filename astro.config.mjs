import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://orca-docs-fawn.vercel.app',
  integrations: [
    starlight({
      title: 'Orca',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/anthurium-ai/orca' },
      ],
      sidebar: [
        { label: 'Start here', items: [
          { label: 'Overview', slug: '' },
          { label: 'Getting started', slug: 'getting-started' },
          { label: 'Concepts', slug: 'concepts' },
          { label: 'Troubleshooting', slug: 'troubleshooting' },
        ]},
        { label: 'Reference', items: [
          { label: 'CLI', slug: 'reference/cli' },
        ]},
      ],
    }),
  ],
});
