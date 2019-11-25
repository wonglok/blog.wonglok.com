<template>
  <div class="bg-white font-sans leading-normal tracking-normal">
    <PostNav></PostNav>
    <SliderNav></SliderNav>
    <Title></Title>
    <ImageHero></ImageHero>

    <!-- container -->
    <div class="container max-w-5xl mx-auto -mt-32">

      <!-- padder -->
      <div class="mx-0 sm:mx-6">

        <!-- white area -->
        <div class="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">

          <PostContent></PostContent>

        </div>
        <!-- white area emd -->

        <Subscribe></Subscribe>
        <Author></Author>

      </div>
      <!-- padder end -->

    </div>
    <!-- container end -->

    <RecommendGallery></RecommendGallery>
    <PostFooer></PostFooer>
  </div>
</template>

<script>
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
    RecommendGallery: () => import('~/components/post/RecommendGallery.vue'),

    dummy: () => Promise.resolve({})
  }
}
</script>

<style>

</style>