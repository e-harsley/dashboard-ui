<template>
  <div id="default" class="bg-gray-50 min-h-screen">
    <div class="sidebar hidden md:block">
      <Sidebar />
    </div>
    <div class="right-side">
      <div class="main">
        <div class="sidebar hidden md:block">
          <Header />
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/dashboardComponent/Sidebar"
import Header from "../components/dashboardComponent/Header"
export default {
  components:{
      Sidebar,
      Header
  }
}
</script>

<style scoped>
@media (min-width: 640px) {
  .main{
   margin-left: 20%;
}
}




</style>