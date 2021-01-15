<template>
  <div
          class="main_header mx-2 pt-3 pb-3 flex items-center justify-between border-b "
        >
        <div>
          <slot name="header"></slot>
        </div>
          <div class="flex justify-between items-center mr-10">
            <div class="text-gray-600">
            Ekhorutomwen Harsley
          </div>
           <img
              class="w-10 h-10 rounded-full ml-5 object-cover"
              src="../../assets/img/profile.jpg"
            />
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>