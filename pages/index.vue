<template>
  <div class="bg-gray-200 font-sans leading-normal tracking-normal">
    <!--
    <pre>{{ debug }}</pre>
    -->
    <HomeHeader></HomeHeader>

    <!--Container-->
		<div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div class="mx-0 sm:mx-6">
        <HeroNav></HeroNav>

        <!-- content -->
        <div class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">

          <LeadCard v-if="firstPost" :post="firstPost"></LeadCard>
          <PostGrid v-if="latestPosts.length > 0" :posts="latestPosts"></PostGrid>

        </div>
        <!-- content end -->
        <Subscribe></Subscribe>
        <Author></Author>

      </div>
    </div>

    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
import * as API from '~/api/api.js'
export default {
  components: {
    HomeHeader: () => import('~/components/home/HomeHeader.vue'),
    PostGrid: () => import('~/components/home/PostGrid.vue'),
    HeroNav: () => import('~/components/home/HeroNav.vue'),
    LeadCard: () => import('~/components/home/LeadCard.vue'),
    Subscribe: () => import('~/components/home/Subscribe.vue'),
    Author: () => import('~/components/home/Author.vue'),
    FooterCustom: () => import('~/components/home/FooterCustom.vue')
  },
  async asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    const data = {}
    try {
      data.latestPosts = await API.getLatestPosts()
    } catch (e) {
      data.latestPosts = []
    }
    data.firstPost = data.latestPosts[0]

    data.debug = JSON.stringify(data, null, '\t')
    return data
  }
}
</script>

<style>
</style>
