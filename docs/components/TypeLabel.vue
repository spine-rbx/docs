<script>
import markdown from 'markdown-it'

export default {
	props: ['text'],
	data() {
		return {
			ptext: new markdown({
				html: true,
				breaks: true,
				linkify: true,
				typographer: true,
			}).render("<code>" + this.text + "</code>"),
		}
	}
}
</script>

<template>
	<div v-html="ptext"></div>
</template>