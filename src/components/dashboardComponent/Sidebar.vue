<template>
  <div class="w-1/5 shadow bg-white border-r-0 h-screen px-5 fixed text-md text-gray-600">
    <div class="flex justify-center items-center pt-8">
      <img src="../../assets/img/logo-dark.svg" class="w-36"  alt="" />
    </div>
    <nav class="mt-10 flex justify-between flex-col h-side-nav">
      <div class="ml-3">
          <router-link :to="{name: 'Dashboard'}" class="mb-1 hover:bg-secondary-50 hover:rounded hover:text-gray-500 p-3 rounded text-gray-500 block"><i class="mr-3 icofont-home text-2xl"></i> Dashboard</router-link>
         <router-link :to="{name: 'CoEarn'}" class="mb-1 hover:bg-secondary-50 hover:rounded hover:text-gray-500 p-3 rounded text-gray-500 block"><i class="mr-3 icofont-ui-user-group text-2xl"></i> Co-Earn</router-link>
          <li class="p-3 mb-1 hover:bg-secondary-50 hover:rounded hover:text-gray-500"><a href=""><i class="mr-3 icofont-bag-alt text-2xl"></i>  Co-Earn Flex</a></li>
          <li class="mb-1 p-3 hover:bg-secondary-50 hover:rounded hover:text-gray-500"><a href=""><i class="mr-3 icofont-ui-home text-2xl"></i> HomeVest</a></li>
          <li class="mb-1 p-3 hover:bg-secondary-50 hover:rounded hover:text-gray-500"><a href=""><i class="mr-3 icofont-money text-2xl"></i> Referrals</a></li>
      </div>
      <div>
          <li class="mb-1 p-3 hover:bg-secondary-50 hover:rounded hover:text-gray-500"><a href=""><i class="icofont-settings-alt text-2xl"></i> Manage Account</a></li>
          <li class="mb-1 p-3 hover:bg-secondary-50 hover:rounded hover:text-gray-500"><a href=""><i class="icofont-ui-settings text-2xl"></i> Settings</a></li>
          <li class="mb-1 p-3 hover:bg-secondary-50 hover:rounded hover:text-gray-500"><a href=""><i class="icofont-logout text-2xl"></i> Logout</a></li>
      </div>
        
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.h-side-nav{
  height: 80vh
}
li{
  list-style: none;
  cursor: pointer;
}
.router-link-active{
  background: #fcf8f3;
}
</style>