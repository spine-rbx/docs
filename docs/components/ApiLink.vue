<script>
export default {
	props: ['to'],
	computed: {
		link() {
			return "/api/" + this.to;
		}
	}
}
</script>

<template>
	<a href="{{ link }}" style="color:var(--vp-c-brand)"><slot></slot></a>
</template>