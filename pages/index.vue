<template>
  <div class="bg-gray-200 font-sans leading-normal tracking-normal">
    <!--Header-->
    <div class="w-full m-0 p-0 bg-cover bg-bottom" style="background-image:url('/img/cover.jpg'); height: 60vh; max-height:460px;">
        <div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          <!--Title-->
            <p class="text-white font-extrabold text-3xl md:text-5xl">
              👻 blog.wonglok.com
            </p>
            <p class="text-xl md:text-2xl text-gray-500">Welcome to my Blog</p>
        </div>
    </div>

    <!--Container-->
		<div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div class="mx-0 sm:mx-6">
        <HeroNav></HeroNav>

        <!-- content -->
        <div class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">

          <LeadCard></LeadCard>
          <PostContent></PostContent>

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
export default {
  components: {
    PostContent: () => import('~/components/home/PostContent.vue'),
    HeroNav: () => import('~/components/home/HeroNav.vue'),
    LeadCard: () => import('~/components/home/LeadCard.vue'),
    Subscribe: () => import('~/components/home/Subscribe.vue'),
    Author: () => import('~/components/home/Author.vue'),
    FooterCustom: () => import('~/components/home/FooterCustom.vue')
  }
}
</script>

<style>
</style>
