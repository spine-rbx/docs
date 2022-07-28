import DefaultTheme from 'vitepress/theme'
import './custom.css'

import ApiDoc from '../../components/ApiDoc.vue'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component('ApiDoc', ApiDoc)
	}
}