// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		starlight({
			title: 'Yolo Design System',
			customCss: ['./src/styles/global.css'],
			head: [
				{
					tag: 'link',
					attrs: {
						href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
						rel: 'stylesheet',
					},
				},
				{
					tag: 'link',
					attrs: {
						href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600;700&display=swap',
						rel: 'stylesheet',
					},
				},
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Design System',
					items: [
						{ label: 'Component Library', slug: 'design-system' },
						{ label: 'Live Demo', slug: 'components-demo' },
						{ label: 'Test Suite', slug: 'test-tailwind' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
