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
					text: 'Bin',
					collapsible: true,
					items: [
						{ text: 'Bin', link: '/api/bin' },
					]
				},
				{
					text: 'Binding',
					collapsible: true,
					items: [
						{ text: 'Binding', link: '/api/binding' },
					]
				},
				{
					text: 'Net',
					collapsible: true,
					items: [
						{ text: 'Net', link: '/api/net' },
						{ text: 'ServerNet', link: '/api/servernet' },
						{ text: 'ClientNet', link: '/api/clientnet' },
						{ text: 'ClientRemoteCallback', link: '/api/clientremotecallback' },
						{ text: 'ClientRemoteSignal', link: '/api/clientremotesignal' },
						{ text: 'ClientRemoteValue', link: '/api/clientremotevalue' },
						{ text: 'ServerRemoteCallback', link: '/api/serverremotecallback' },
						{ text: 'ServerRemoteSignal', link: '/api/serverremotesignal' },
						{ text: 'ServerRemoteValue', link: '/api/serverremotevalue' },
					]
				},
				{
					text: 'Object',
					collapsible: true,
					items: [
						{ text: 'Object', link: '/api/object' },
					]
				},
				{
					text: 'Pipe',
					collapsible: true,
					items: [
						{ text: 'Pipe', link: '/api/pipe' },
						{ text: 'PipeContext', link: '/api/pipecontext' },
					]
				},
				{
					text: 'Promise',
					collapsible: true,
					items: [
						{ text: 'Promise', link: '/api/promise' },
					]
				},
				{
					text: 'Rest',
					collapsible: true,
					items: [
						{ text: 'Rest', link: '/api/rest' },
						{ text: 'Base64', link: '/api/base64' },
						{ text: 'Json', link: '/api/json' },
						{ text: 'Request', link: '/api/request' },
						{ text: 'Response', link: '/api/response' },
					]
				},
				{
					text: 'Service',
					collapsible: true,
					items: [
						{ text: 'Service', link: '/api/service' },
						{ text: 'ServerService', link: '/api/serverservice' },
						{ text: 'ServerServiceClient', link: '/api/serverserviceclient' },
						{ text: 'ClientService', link: '/api/clientservice' },
					]
				},
				{
					text: 'Signal',
					collapsible: true,
					items: [
						{ text: 'Signal', link: '/api/signal' },
					]
				},
				{
					text: 'Util',
					collapsible: true,
					items: [
						{ text: 'Util', link: '/api/util' },
					]
				},
				{
					text: 'Value',
					collapsible: true,
					items: [
						{ text: 'Value', link: '/api/value' },
					]
				},
			],
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/spine-rbx' },
			{ icon: 'discord', link: 'https://discord.com/' }
		],
	},
})