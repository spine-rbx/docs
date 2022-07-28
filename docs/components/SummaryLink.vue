<script>
import md from 'markdown-it'

export default {
	props: ['name', 'description'],
	data() {
		return {
			pd: new md({
				html: true,
				linkify: true,
				typographer: true,
			}).render("<code><a href='#" + this.name + "' style='color:white'>" + this.name + "</a>: " + this.description + "</code>"),
		}
	}
}
</script>

<template>
	<div v-html="pd"></div>
</template>