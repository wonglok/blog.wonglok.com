<template>

	<!--image-->
	<div class="container w-full dmax-w-6xl mx-auto bg-white bg-cover mt-8 sm:mb-10 rounded" :style="getCSS()"></div>

</template>

<script>
import * as API from '~/api/api.js'
export default {
	props: {
		post: {}
	},
	methods: {
		getCSS () {
			let url = ''
			if (this.post && this.post.cover) {
				url = this.post.cover.url
			}
			return `background-image:url('${API.baseURL}/${url}'); background-size: cover; background-position: center center; background-color: papayawhip; max-width: 100vw; height: 56vh;`
		}
	}
}
</script>

<style>

</style>
