<template>
  <div class="bg-gray-200" v-if="related && related.length >= 2">
    <div class="container w-full max-w-6xl mx-auto px-2 py-8">
      <div class="flex flex-wrap -mx-2">
        <!--
        // <div class="w-full md:w-1/3 px-2 pb-12">
        // 	<div class="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
        // 		<a href="#" class="no-underline hover:no-underline">
        // 				<img src="https://source.unsplash.com/_AjqGGafofE/400x200" class="h-48 w-full rounded-t shadow-lg">
        // 				<div class="p-6 h-auto md:h-48">
        // 					<p class="text-gray-600 text-xs md:text-sm">GETTING STARTED</p>
        // 					<div class="font-bold text-xl text-gray-900">Lorem ipsum dolor sit amet.</div>
        // 					<p class="text-gray-800 font-serif text-base mb-5">
        // 						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
        // 					</p>
        // 				</div>
        // 				<div class="flex items-center justify-between inset-x-0 bottom-0 p-6">
        // 					<img class="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author">
        // 					<p class="text-gray-600 text-xs md:text-sm">2 MIN READ</p>
        // 				</div>
        // 		</a>
        // 	</div>
        // </div>

        <pre>{{ related }}</pre>
        -->

        <RecommendItem :lok="lok" :ratio="`1/${related.length}`" :post="related[0]"></RecommendItem>
        <RecommendItem :lok="lok" :ratio="`1/${related.length}`" :post="related[1]"></RecommendItem>
        <RecommendItem :lok="lok" :ratio="`1/${related.length}`" :post="related[2]"></RecommendItem>

        <!--
        // <div class="w-full md:w-1/3 px-2 pb-12">
        // 	<div class="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
        // 		<a href="#" class="no-underline hover:no-underline">
        // 				<img src="https://source.unsplash.com/DEa8_vxKlEo/400x200" class="h-48 w-full rounded-t shadow">
        // 				<div class="p-6 h-auto md:h-48">
        // 					<p class="text-gray-600 text-xs md:text-sm">FOREST</p>
        // 					<div class="font-bold text-xl text-gray-900">What is life but a teardrop in the eye of infinity?</div>
        // 					<p class="text-gray-800 font-serif text-base mb-5">
        // 						Mollis pretium integer eros et dui orci, lectus nec elit sagittis neque. Dignissim ac nullam semper aliquet volutpat, ut scelerisque.
        // 					</p>
        // 				</div>
        // 				<div class="flex items-center justify-between inset-x-0 bottom-0 p-6">
        // 					<img class="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author">
        // 					<p class="text-gray-600 text-xs md:text-sm">7 MIN READ</p>
        // 				</div>
        // 		</a>
        // 	</div>
        // </div>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import * as API from '~/api/api.js'
export default {
  props: {
    lok: {
      default: false
    },
    related: {
      default: false
    },
    post: {}
  },
  components: {
    RecommendItem: () => import('~/components/post/RecommendItem.vue')
  },
  data () {
    return {
    }
  },
  mounted () {
    // this.getRelated()
  },
  methods: {
    // async getRelated () {
    //   this.related
    // }
  }
}
</script>

<style>

</style>
