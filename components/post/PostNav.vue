<template>
  <!--Nav-->
  <nav class="bg-gray-900 p-4 mt-0 w-full">
    <div class="container mx-auto flex items-center">
      <div class="flex text-white font-extrabold">
        <nuxt-link class="flex text-white text-base no-underline hover:text-white hover:no-underline" to="/">
          👻 <span class="hidden w-0 md:w-auto md:block pl-1">blog.wonglok.com</span>
        </nuxt-link>
      </div>
      <div class="flex pl-4 text-sm">
        <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
          <li class="mr-2">
            <nuxt-link class="inline-block py-2 px-2 text-white no-underline" to="/">HOME</nuxt-link>
          </li>

          <!--
          <li class="mr-2">
            <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2" href="#">LINK</a>
          </li>
          <li class="mr-2">
            <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2" href="#">LINK</a>
          </li>
          <li class="mr-2">
            <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2" href="#">LINK</a>
          </li>
          -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
