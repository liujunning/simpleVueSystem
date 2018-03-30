<template>
  <div id="app">
    <keep-alive>
      <!-- <router-view name="HelloWorld" class="two"></router-view>
      -->
      
    </keep-alive>  
      <keep-alive>
         <!-- <router-view name="Layouts" class="one"></router-view> -->
         <router-view></router-view>
      </keep-alive>
   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.one{
  border:5px solid blue
}
.two{
  border:9px solid red
}
</style>
