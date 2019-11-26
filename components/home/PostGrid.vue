<template>
  <!--Posts Container-->
  <div class="flex flex-wrap justify-between pt-12" v-if="posts && posts.length > 0">
    <PostGridItem :lok="lok" :post="posts[1]" ratio="1/3"></PostGridItem>
    <PostGridItem :lok="lok" :post="posts[2]" ratio="1/3"></PostGridItem>
    <PostGridItem :lok="lok" :post="posts[3]" ratio="1/3"></PostGridItem>

    <PostGridItem :lok="lok" :post="posts[4]" ratio="1/2"></PostGridItem>
    <PostGridItem :lok="lok" :post="posts[5]" ratio="1/2"></PostGridItem>

    <PostGridItem :lok="lok" :post="posts[6]" ratio="full"></PostGridItem>

    <PostGridItem :lok="lok" :post="posts[7]" ratio="2/3"></PostGridItem>
    <PostGridItem :lok="lok" :post="posts[8]" ratio="1/3"></PostGridItem>
  </div>
  <!--/ Post Content-->
</template>

<script>
export default {
  components: {
    PostGridItem: () => import('~/components/home/PostGridItem.vue')
  },
  props: {
    lok: {
      default: false
    },
    posts: {
      default () {
        return []
      }
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
