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
    description: 'Self-hosted image sharing service with privacy-first approach. Complete documentation for installation, configuration, and usage.',
    favicon: './favicon.png',
    logo: {
      src: './src/assets/slink.png',
      replacesTitle: true,
    },
    head: [
      {
        tag: 'meta',
        attrs: {
          property: 'og:image',
          content: 'https://docs.slinkapp.io/slink.png'
        }
      },
      {
        tag: 'meta',
        attrs: {
          name: 'keywords',
          content: 'self-hosted, image sharing, privacy, docker, open source, file hosting, team collaboration'
        }
      }
    ],
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
    components: {
      ThemeSelect: './src/components/ThemeToggle.astro',
      Hero: './src/components/Hero.astro',
    },
  }), icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});