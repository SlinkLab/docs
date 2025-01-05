// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Slink Docs',
      favicon: './favicon.png',
      logo: {
        src: './src/assets/slink.png',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/andrii-kryvoviaz/slink',
      },
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Installation',
          autogenerate: { directory: 'installation' },
        },
        {
          label: 'Configuration',
          autogenerate: { directory: 'configuration' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Contributing',
          slug: 'contributing',
        },
        {
          label: 'Security',
          slug: 'security',
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
});
