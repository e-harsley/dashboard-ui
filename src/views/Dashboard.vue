<template>
<div class="grid grid-cols-3 grid-flow-col gap-4 mt-2 p-7">
  <div class="left-dash col-span-2 row-span-2">
      <DashInfo />
    <div class="my-10 mt-1 pb-3">
      <div class="bg-white shadow-lg h-96 hover:shadow-xl rounded-md p-9 pt-3">
              <canvas id="line-chart"></canvas>
          </div>
    </div>
    <div>
      <Trending />
    </div>
  </div>
    <div class="right-dash h-right-height p-5 bg-white rounded-xl text-gray-600 row-span-1">
      <SideWallet />
    </div>  
</div>

</template>

<script>
import SideWallet from "../components/dashboardComponent/SideWallet"
import DashInfo from "../components/dashboardComponent/DashInfo"
import Trending from "../components/dashboardComponent/Trending"
export default {
  components: {
    SideWallet,
    DashInfo,
    Trending
  },
 
  mounted() {
    new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      },
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'CO Earn'
    }
  }
});
  },
}
</script>

<style>
.h-right-height{
  height: auto;
}
</style>