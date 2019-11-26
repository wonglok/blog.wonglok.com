<template>
  <!--1/2 col -->
  <div v-if="post" :class="`w-full md:w-${ratio} p-3 flex flex-col flex-grow flex-shrink`">
    <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
      <nuxt-link :to="`/${post.slug}`" class="flex flex-wrap no-underline hover:no-underline">
        <img :src="baseURL + post.cover.url" class="h-full w-full rounded-t pb-6">
        <p class="w-full text-gray-600 text-xs md:text-sm px-6">{{ getDate() }}</p>
        <div class="w-full font-bold text-xl text-gray-900 px-6">{{ post.title }}</div>
        <p class="text-gray-800 font-serif text-base px-6 mb-5" v-html="html">
        </p>
      </nuxt-link>
    </div>
    <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
      <div class="flex items-center justify-between">
        <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" :src="`${lok.smallPic}`" alt="Avatar of Author">
        <p class="text-gray-600 text-xs md:text-sm">{{ minRead(post.content) }} Min Read</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as API from '~/api/api.js'
import moment from 'moment'
export default {
  props: {
    ratio: {
      default: `1/3`
    },
    post: {
      default () {
        return false
      }
    }
  },
  data () {
    return {
      lok: false,
      baseURL: API.baseURL,
      html: '',
      partial: '',
    }
  },
  async mounted () {
    this.partial = (this.post.content || '\n').split('\n').slice(0, 3).join('\n')
    this.html = API.renderHTML({ content: this.partial }) + '<br/>'
    this.lok = await API.getLokProfSettings()
  },
  methods: {
    getDate () {
      if (this.post) {
        return moment(this.post.datetime).endOf('day').fromNow()
      } else {
        return ''
      }
    },
    minRead (v) {
      return API.getReadingTime(v)
    }
  }
}
</script>
<style>

</style>