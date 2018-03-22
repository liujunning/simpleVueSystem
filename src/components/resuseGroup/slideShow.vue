<template>
  <div class="slide-show" @mouseout="runInv" @mouseover="clearInv">
       <div class="slide-img">
         <a href="XXX">
           <div style="color:red;font-size:18px;position:absolute;z-index:100000">{{nowIndex+1}}</div>
            <transition name="slide-trans">
              <img v-if="isShow" :src="slides[nowIndex].src">
            </transition>
            <transition name="slide-trans-old">
              <img v-if="!isShow" :src="slides[nowIndex].src">
            </transition>
         </a>
       </div>
       <h2>{{ slides[nowIndex].title }}</h2>
       <ul class="slide-pages">
         <li @click="goto(prevIndex)"><</li>
         <li v-for="(item,index) in slides" >
           <a @click="goto(index)" :class="{on:index==nowIndex}">{{index+1}}</a>
         </li>
         <li @click="goto(nextIndex)">></li>
       </ul>
  </div>
</template>
<script>
    export default{
        name:'slideShow',
        props:{
            koo:{},
            slides:{},
            inv:{
              type:Number
            }
        },
        data(){
            return {
              nowIndex:0,
              isShow:true
            }
        },
        methods:{
          goto(index){
            this.isShow = false;
            setTimeout(()=>{
              this.nowIndex = index;
              this.isShow = true;
              this.$emit('rob',index)
            },10)
            
          },
          runInv(){
            
            this.invId = setInterval(()=>{
              
              this.goto(this.nextIndex);
            },this.inv)
          },
          clearInv(){
            clearInterval(this.invId)
          }
        },
        computed:{
          prevIndex(){
            if(this.nowIndex==0){
              return this.slides.length-1
            }else{
                return this.nowIndex-1
            }
          }, 
          nextIndex(){
            if(this.nowIndex == this.slides.length-1){
              return 0;
            }else{
              return this.nowIndex+1;
            }
          }
        },
        mounted(){
          this.runInv()
        }
    }
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
  color:blue
}
</style>
