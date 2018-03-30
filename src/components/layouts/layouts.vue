<template>
  <div>
      <div class="app-head">
          <div class="app-head-inner">
              <img src="../../assets/logo.png" alt="" @click="goFirst()">
              <div class="head-nav">
                  <ul class="nav-list">
                      <li @click="logClick()">登 录</li>
                      <li class="nav-pile">|</li>
                      <li @click="regClick()">注 册</li>
                      <li class="nav-pile">|</li>
                      <li @click="aboutClick()">关 于</li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="container">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </div>
      <!-- <div class="app-content">
         <pageIndex></pageIndex>
      </div> -->
      <div class="app-foot">
          <p>@ 2016 fishenkjk MIT</p>
      </div>
           <myDialog :isShow="isShowAboutDialog" @onClose="Kclose">
                <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
           </myDialog>
           <myDialog :isShow="isShowLogDialog" @onClose="logClose">
                <logForm></logForm>
           </myDialog>
           <myDialog :isShow="isShowRegDialog" @onClose="regClose">
                <p>御命丹心</p>
           </myDialog>
       
      
  </div>
</template>
<script>
    import pageIndex from '../pages/index'
    import myDialog from '../base/dialog.vue'
    import logForm from '../loginForm'
    //import _ from 'underscore'
    export default {
        components:{
            pageIndex,
            myDialog,
            logForm
        },
        data(){
            return {
                isShowDialog:false,
                isShowAboutDialog:false,
                isShowLogDialog:false,
                isShowRegDialog:false
            }
        },
        methods:{
            aboutClick(){
                this.isShowAboutDialog = true
            },
            logClick(){
                this.isShowLogDialog = true
            },
            regClick(){
                this.isShowRegDialog = true
            },
            Kclose(){
                this.isShowAboutDialog = false
            },
            logClose(){
                this.isShowLogDialog = false
            },
            regClose(){
                this.isShowRegDialog = false;
            },
            goFirst(){
                this.$router.push({
                    path:'/',
                    query: {selected: "2",ben:'78'}
                })
            }
        },
        mounted(){
            
        },
        beforeRouteEnter(to,from,next){
          next(vm=>{
              
          })
        },
        beforeRouteUpdate (to, from, next){
          next()
        },
        beforeRouteLeave(to,from,next){
            // const answer = window.confirm("确定保存再离开")
            // if(answer){
            //     next()
            // }else{
            //     next(false)
            // }
            next()
        }
    }
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
