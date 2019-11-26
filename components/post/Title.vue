<template>
	<!--Title-->
	<div class="text-center pt-16 md:pt-32" v-if="post">
		<p class="text-sm md:text-base text-teal-500 font-bold">Created: {{ getDate() }}</p>
		<h1 class="font-bold break-normal text-3xl md:text-5xl">{{ post.title }}</h1>
	</div>
</template>

<script>
import moment from 'moment'
export default {
	props: {
		post: {
			default: false
		}
	},
	methods: {
		getDate () {
			return moment(this.post.datetime).endOf('day').fromNow()
		}
	}
}
</script>

<style>

</style>
