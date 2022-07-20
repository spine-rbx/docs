import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'Spine',
	description: 'Testing stuff.',

	markdown: {
		lineNumbers: true
	},

	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
			{ text: 'API', link: '/api/', activeMatch: '/api/' },
		],

		sidebar: {
			'/guide/': [
				{
					text: 'Tutorial',
					collapsible: true,
					items: [
						{ text: 'Introduction', link: '/guide/tutorial/introduction' },
						{ text: 'Installing', link: '/guide/tutorial/installing' },
						{ text: 'Packages', link: '/guide/tutorial/packages' },
					]
				},
				{
					text: 'Topics',
					collapsible: true,
					items: [
						{ text: 'Bin', link: '/guide/topics/bin' },
						{ text: 'Binding', link: '/guide/topics/binding' },
						{ text: 'Net', link: '/guide/topics/net' },
						{ text: 'Object', link: '/guide/topics/object' },
						{ text: 'Pipe', link: '/guide/topics/pipe' },
						{ text: 'Promise', link: '/guide/topics/promise' },
						{ text: 'Service', link: '/guide/topics/service' },
						{ text: 'Signal', link: '/guide/topics/signal' },
						{ text: 'Util', link: 'guide/topics/util' },
					]
				},
			],

			'/api/': [
				{
					text: 'API',
					collapsible: true,
					items: [
						{ text: 'Overview', link: '/api/' },
					]
				}
			],
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/spine-rbx' },
			{ icon: 'discord', link: 'https://discord.com/' }
		],
	}
})