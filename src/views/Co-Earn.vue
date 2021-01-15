<template>
    <div class="mt-5 mx-10">
         <div>
 <div class="container my-12 mx-auto px-4 md:px-12">
     <div class="my-4 py-3 border-b">
             <button class="button focus:outline-none focus:bg-secondary-light focus:text-white mr-1 mb-2 text-gray-500 px-3 py-2 rounded" @click="showTab('opportunites')">Opportunities</button>
             <button class="button focus:outline-none focus:bg-secondary-light focus:text-white mr-1 mb-2 text-gray-500 px-3 py-2 rounded" @click="showTab('investment')">My Investment</button>
             <button class="button focus:outline-none focus:bg-secondary-light focus:text-white mr-1 mb-2 text-gray-500 px-3 py-2 rounded" @click="showTab('pending')">Pending</button>
         </div>
        <div v-if="default_tab == 'opportunites'">
            <Products />
        </div>
        <div v-if="default_tab == 'investment'">
            <div>
                <div class="grid grid-cols-3 grid-flow-col gap-4 mt-2">
      <div class="bg-white shadow-lg hover:shadow-xl rounded-md p-6">
                <div class="mt-3 flex px-4 items-center">
        <div class="flex justify-center mr-4 w-15 h-15 bg-secondary-50 text-secondary-dark rounded-full">
          <i class="icofont-coins text-3xl"></i>
        </div>
        <div>
          <h1 class="text-md text-gray-500">500.00</h1>
          <h1 class="text-md text-gray-500">Total Amount Invested</h1>
        </div>
      </div>
              </div>
     <div class="bg-white shadow-lg hover:shadow-xl rounded-md p-6">
                <div class="mt-3 flex px-4 items-center">
        <div class="flex justify-center mr-4 w-15 h-15 bg-secondary-50 text-secondary-dark rounded-full">
          <i class="icofont-gift text-3xl"></i>
        </div>
        <div>
          <h1 class="text-md text-gray-500">0</h1>
          <h1 class="text-md text-gray-500">Total Package</h1>
        </div>
      </div>
              </div>
    <div class="bg-white shadow-lg hover:shadow-xl rounded-md p-6">
                <div class="mt-3 flex px-4 items-center">
        <div class="flex justify-center mr-4 w-15 h-15 bg-secondary-50 text-secondary-dark rounded-full">
          <i class="icofont-cubes text-3xl"></i>
        </div>
        <div>
          <h1 class="text-md text-gray-500">0</h1>
          <h1 class="text-md text-gray-500">Total deadline</h1>
        </div>
      </div>
              </div>
    </div>
    <br />
    <br>
    <Products />
            </div>
        </div>
        <div v-if="default_tab == 'pending'">
            holla
        </div>
</div>
         </div>
    </div>
</template>

<script>
import Products from '../components/co-earn/Products'
export default {
     components: {
        Products,
    },
    data(){
    return{
      default_tab: "opportunites",
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