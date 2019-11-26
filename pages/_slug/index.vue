<template>
  <div class="bg-white font-sans leading-normal tracking-normal">
    <!--
    <pre>{{ posts }}</pre>
    -->
    <PostNav></PostNav>
    <SliderNav></SliderNav>
    <Title :post="post"></Title>
    <ImageHero :post="post"></ImageHero>

    <!-- container -->
    <div class="container max-w-5xl mx-auto lg:-mt-32">

      <!-- padder -->
      <div class="mx-0 sm:mx-6">

        <!-- white area -->
        <div class="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">

          <PostContent :post="post"></PostContent>

        </div>
        <!-- white area emd -->

        <Subscribe></Subscribe>
        <Author></Author>

      </div>
      <!-- padder end -->

    </div>
    <!-- container end -->

    <RecommendGallery v-if="post" :related="related" :post="post"></RecommendGallery>
    <PostFooer></PostFooer>
  </div>
</template>

<script>
import * as API from '~/api/api.js'
export default {
  components: {
    PostNav: () => import('~/components/post/PostNav.vue'),
    SliderNav: () => import('~/components/post/SliderNav.vue'),
    Title: () => import('~/components/post/Title.vue'),
    ImageHero: () => import('~/components/post/ImageHero.vue'),
    Subscribe: () => import('~/components/post/Subscribe.vue'),
    Author: () => import('~/components/post/Author.vue'),
    PostContent: () => import('~/components/post/PostContent.vue'),
    PostFooer: () => import('~/components/post/PostFooer.vue'),
    RecommendGallery: () => import('~/components/post/RecommendGallery.vue')
  },
  async asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    const data = {
      slug: route.params.slug
    }
    data.posts = await API.getPostsBySlug({ slug: route.params.slug })
    data.post = data.posts[0]

    data.related = await API.getRelated({ post: data.post })

    data.debug = JSON.stringify(data, null, '\t')

    if (!data.post) {
      redirect('/404')
    }
    return data
  }
}
</script>

<style>

</style>
