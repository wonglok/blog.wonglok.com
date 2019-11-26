<template>
    <!--Author-->
    <div class="flex w-full items-center font-sans p-8 md:p-24">
      <img class="w-10 h-10 rounded-full mr-4 magnify" :src="lok.smallPic" alt="Lok Lok">
      <div class="flex-1">
        <p class="text-base font-bold text-base md:text-xl leading-none">Wong Lok</p>
        <p class="text-gray-600 text-xs md:text-base">I love web inventions. I made a few projects:
        <a class="text-gray-800 hover:text-teal-500 no-underline border-b-2 border-teal-500" target="_blank" href="https://CreativeCodeLab.com">CreativeCodeLab.com</a>
        <a class="text-gray-800 hover:text-teal-500 no-underline border-b-2 border-teal-500" target="_blank" href="https://EffectNode.com">EffectNode.com</a>
        <a class="text-gray-800 hover:text-teal-500 no-underline border-b-2 border-teal-500" target="_blank" href="https://igraph.effectnode.com">iGraph Cinematic</a>
        <a class="text-gray-800 hover:text-teal-500 no-underline border-b-2 border-teal-500" target="_blank" href="https://age.wonglok.com">Assisted Graphics Engineering</a>
      </p>
      </div>
      <div class="justify-end">
        <nuxt-link :to="`/lokprofile`">
          <button class="bg-transparent border border-gray-500 hover:border-teal-500 text-xs text-gray-500 hover:text-teal-500 font-bold py-2 px-4 rounded-full">Read More</button>
        </nuxt-link>
      </div>
    </div>
    <!--/Author-->
</template>

<script>
export default {
  props: {
    lok: {}
  }
}
</script>

<style scoped>
.magnify{
  transition: transform 1s ease-in-out;
}
.magnify:hover{
  transform: scale(1.6);
}
</style>
