<template>
  <div >
      <div style='margin-left:300px;margin-top:100px;border:1px solid black'>
        <canvas id="myCanvas"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
      mounted(){
          let c = document.getElementById("myCanvas");
          let ctx = c.getContext('2d');

          let myGradient = ctx.createLinearGradient(0,180,180,180)
          myGradient.addColorStop(0,"purple")
          myGradient.addColorStop(1,"yellow")
          ctx.fillStyle = myGradient;
          ctx.fillRect (0,20,150,80);   
      }
    }
</script>
<style scoped>

</style>
