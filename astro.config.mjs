// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const slinkCodeTheme = {
  name: 'slink-terminal',
  type: 'dark',
  colors: {
    'editor.background': '#121212',
    'editor.foreground': '#bdbbbb',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#657b83', fontStyle: 'italic' },
    },
    {
      scope: ['keyword', 'keyword.control', 'storage', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#a52aff' },
    },
    {
      scope: ['entity.name.function', 'support.function', 'meta.function-call'],
      settings: { foreground: '#2883ff' },
    },
    {
      scope: ['string.quoted', 'string.template', 'punctuation.definition.string', 'string.unquoted.argument', 'string.unquoted.plain'],
      settings: { foreground: '#5ac8ff' },
    },
    {
      scope: ['constant.numeric', 'constant.language', 'constant.character'],
      settings: { foreground: '#905aff' },
    },
    {
      scope: ['constant.other.option'],
      settings: { foreground: '#a52aff' },
    },
    {
      scope: ['constant.character.escape.line-continuation', 'punctuation.separator.continuation'],
      settings: { foreground: '#657b83' },
    },
    {
      scope: ['support.type', 'entity.name.type', 'entity.name.class', 'support.class'],
      settings: { foreground: '#5c78ff' },
    },
    {
      scope: ['entity.name.tag'],
      settings: { foreground: '#a52aff' },
    },
    {
      scope: ['entity.other.attribute-name', 'meta.property-name', 'support.type.property-name'],
      settings: { foreground: '#5ea2ff' },
    },
    {
      scope: ['variable', 'variable.parameter', 'variable.other', 'keyword.operator', 'punctuation'],
      settings: { foreground: '#bdbbbb' },
    },
  ],
};

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.slinkapp.io',

  redirects: {
    '/reference/03-storage-provider/': '/configuration/02-storage-provider/',
    '/configuration/03-storage-provider/': '/configuration/02-storage-provider/',
    '/configuration/02-admin-settings-page/': '/configuration/01-environment-variables/',
    '/configuration/03-overriding-server-configuration/': '/configuration/01-environment-variables/',
    '/configuration/04-overriding-server-configuration/': '/configuration/01-environment-variables/',
    '/reference/03-user-creation/': '/user-management/01-user-creation/',
    '/reference/01-approve-user/': '/user-management/02-approve-user/',
    '/reference/02-manage-user-permissions/': '/user-management/03-manage-user-permissions/',
    '/reference/08-share-management/': '/usage/01-share-management/',
    '/reference/05-api-key-management/': '/usage/02-api-key-management/',
    '/reference/06-sharex-integration/': '/usage/03-sharex-integration/',
    '/reference/07-guest-upload/': '/usage/04-guest-upload/',
    '/reference/09-localization/': '/usage/05-localization/',
    '/reference/04-non-root-container-user/': '/security/02-non-root-container-user/',
    '/security/': '/security/01-overview/',
  },

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
        items: [{ autogenerate: { directory: 'getting-started' } }],
      },
      {
        label: 'Installation',
        items: [{ autogenerate: { directory: 'installation' } }],
      },
      {
        label: 'Configuration',
        items: [{ autogenerate: { directory: 'configuration' } }],
      },
      {
        label: 'User Management',
        items: [{ autogenerate: { directory: 'user-management' } }],
      },
      {
        label: 'Usage',
        items: [{ autogenerate: { directory: 'usage' } }],
      },
      {
        label: 'Security',
        items: [{ autogenerate: { directory: 'security' } }],
      },
      {
        label: 'Contributing',
        slug: 'contributing',
      },
    ],
    customCss: ['./src/tailwind.css'],
    expressiveCode: {
      themes: [slinkCodeTheme],
      styleOverrides: {
        borderRadius: '0.75rem',
        borderColor: 'var(--theme-border)',
        codeFontSize: '0.9rem',
        codeLineHeight: '1.65',
        codePaddingBlock: '1rem',
        codePaddingInline: '1.25rem',
        frames: {
          frameBoxShadowCssValue: '0 14px 34px rgba(0, 0, 0, 0.35)',
          terminalBackground: '#121212',
          terminalTitlebarBackground: '#121212',
          terminalTitlebarBorderBottomColor: 'rgba(255, 255, 255, 0.05)',
          terminalTitlebarForeground: '#bdbbbb',
          terminalTitlebarDotsForeground: '#3f3f46',
        },
      },
    },
    components: {
      ThemeSelect: './src/components/ThemeToggle.astro',
      Hero: './src/components/Hero.astro',
    },
  }), icon(), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
    filter: (page) => {
      // Exclude non-indexable pages and legacy redirect stubs
      return (
        !page.includes('/404') &&
        !page.includes('/search') &&
        !page.includes('/reference/') &&
        !page.includes('/configuration/02-admin-settings-page/') &&
        !page.includes('/configuration/03-storage-provider/') &&
        !page.includes('/configuration/03-overriding-server-configuration/') &&
        !page.includes('/configuration/04-overriding-server-configuration/') &&
        page !== 'https://docs.slinkapp.io/security/'
      );
    },
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