// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.slinkapp.io',

  integrations: [starlight({
    title: 'Slink Docs',
    favicon: './favicon.png',
    logo: {
      src: './src/assets/slink.png',
      replacesTitle: true,
    },
    social: [
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/andrii-kryvoviaz/slink',
      },
    ],
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
  }), icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});