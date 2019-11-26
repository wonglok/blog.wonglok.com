<template>
  <!--Lead Card-->
  <div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
    <nuxt-link :to="post.slug" class="flex flex-wrap no-underline hover:no-underline">
      <div class="w-full md:w-2/3 rounded-t">
        <img :src="`${post.cover ? baseURL + post.cover.url : 'https://source.unsplash.com/collection/494263/800x600'}`" class="h-full w-full shadow">
      </div>

      <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <p class="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">Latest Post:</p>
          <div class="w-full font-bold text-xl text-gray-900 px-6">{{ post.title }}</div>
          <p class="text-gray-800 font-serif text-base px-6 mb-5" v-html="html">
          </p>
        </div>

        <div v-if="lok" class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div class="flex items-center justify-between">
            <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" :src="lok.smallPic" alt="Avatar of Author">
            <p class="text-gray-600 text-xs md:text-sm">{{ getReadingTime(post.content) }} Min Read</p>
          </div>
        </div>
      </div>

    </nuxt-link>
  </div>
  <!--/Lead Card-->
</template>

<script>
import * as API from '~/api/api.js'

export default {
  props: {
    post: {},
    lok: {}
  },
  data () {
    return {
      html: '',
      baseURL: API.baseURL
    }
  },
  async mounted () {
    let partial = (this.post.content || '\n').split('\n').slice(0, 3).join('\n')
    this.html = API.renderHTML({ content: partial }) + '<br/>'
  },
  methods: {
    getReadingTime (v) {
      return API.getReadingTime(v)
    }
  }
}
</script>

<style>

</style>
