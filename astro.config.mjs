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
          property: 'og:type',
          content: 'website'
        }
      },
      {
        tag: 'meta',
        attrs: {
          property: 'og:site_name',
          content: 'Slink Documentation'
        }
      },
      {
        tag: 'meta',
        attrs: {
          name: 'keywords',
          content: 'self-hosted, image sharing, privacy, docker, open source, file hosting, team collaboration, slink, documentation, installation, configuration'
        }
      },
      {
        tag: 'meta',
        attrs: {
          name: 'author',
          content: 'Slink'
        }
      },
      {
        tag: 'meta',
        attrs: {
          name: 'robots',
          content: 'index, follow, max-image-preview:large'
        }
      },
      {
        tag: 'link',
        attrs: {
          rel: 'canonical',
          href: 'https://docs.slinkapp.io'
        }
      },
      {
        tag: 'script',
        attrs: {
          type: 'application/ld+json'
        },
        content: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Slink Documentation',
          url: 'https://docs.slinkapp.io',
          description: 'Self-hosted image sharing service with privacy-first approach. Complete documentation for installation, configuration, and usage.',
          publisher: {
            '@type': 'Organization',
            name: 'Slink',
            url: 'https://github.com/andrii-kryvoviaz/slink'
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://docs.slinkapp.io/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        })
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
        label: 'API Reference',
        autogenerate: { directory: 'api' },
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
  }), icon(), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
    filter: (page) => {
      // Exclude any pages you don't want indexed
      return !page.includes('/404') && !page.includes('/search');
    },
    customPages: [
      'https://docs.slinkapp.io/',
      'https://docs.slinkapp.io/getting-started/01-introduction/',
      'https://docs.slinkapp.io/installation/01-docker-compose/',
      'https://docs.slinkapp.io/installation/02-reverse-proxy/',
      'https://docs.slinkapp.io/configuration/',
      'https://docs.slinkapp.io/reference/',
      'https://docs.slinkapp.io/api/',
      'https://docs.slinkapp.io/contributing/',
      'https://docs.slinkapp.io/security/'
    ]
  })],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': '/src/components',
      },
    },
  },
});