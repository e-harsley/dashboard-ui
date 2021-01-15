<template>
  <div class="shadow-lg hover:shadow-xl bg-secondary-50 rounded-md p-2">
        <div class="border-b border-gray-100 p-2 pb-1">
          <button class="button focus:outline-none focus:bg-secondary-light focus:text-white mr-1 mb-2 text-gray-500 px-3 py-2 rounded" @click="showTab('homeVest')">HomeVest</button>
          <button class="button focus:outline-none focus:bg-secondary-light focus:text-white mr-1 mb-2 text-gray-500 px-3 py-2 rounded" @click="showTab('co-earn')">Co-earn</button>
          <button class="button focus:outline-none focus:bg-secondary-light focus:text-white mr-1 mb-2 text-gray-500 px-3 py-2 rounded" @click="showTab('co-earn-flex')">Co-earn Flex</button>
          <button class="button focus:outline-none focus:bg-secondary-light focus:text-white mr-1 mb-2 text-gray-500 px-3 py-2 rounded" @click="showTab('trending')">Trending</button>
        </div>
        <div>
          <div v-if="default_tab == 'homeVest'">
            <div class="flex justify-center items-center flex-col py-14">
              <h1 class="font-semibold text-2xl text-gray-500">No Active investment</h1> 
              <button class="button focus:outline-none bg-secondary-light mt-4 text-white px-3 py-2 rounded">HomeVest</button>
            </div>
          </div>
          <div v-if="default_tab == 'co-earn'">
            <div class="flex justify-center items-center flex-col py-14">
              <h1 class="font-semibold text-2xl text-gray-500">No Active Co earn investment</h1> 
              <button class="button focus:outline-none bg-secondary-light mt-4 text-white px-3 py-2 rounded">HomeVest</button>
            </div>
          </div>
          <div v-if="default_tab == 'co-earn-flex'">
            <div class="flex justify-center items-center flex-col py-14">
              <h1 class="font-semibold text-2xl text-gray-500">No Active flex investment</h1> 
              <button class="button focus:outline-none bg-secondary-light mt-4 text-white px-3 py-2 rounded">HomeVest</button>
            </div>
          </div>
          <div v-if="default_tab == 'trending'">
            <div class="flex justify-center items-center flex-col py-14">
              <h1 class="font-semibold text-2xl text-gray-500">No trending investment</h1> 
              <button class="button focus:outline-none bg-secondary-light mt-4 text-white px-3 py-2 rounded">HomeVest</button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
data(){
    return{
      default_tab: "homeVest",
    }
  },
 methods: {
    showTab(param){
      this.default_tab = param
    }
  },
}
</script>

<style>

</style>