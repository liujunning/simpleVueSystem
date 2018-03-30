<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
           placeholder="请输入用户名">
        </div>
        <span class="g-form-error"></span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          placeholder="请输入密码">
        </div>
        <span class="g-form-error"></span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="login()">登录</a>
        </div>
      </div>
      <p></p>
      <div style="width:200px;height:200px;text-align:center;border:2px solid blue;margin-left:100px;font-size:19px;line-height:200px">
          {{ count }}
      </div>
      <button @click="increment()">
        点击增加
      </button>
      <button @click="reducement()">
        点击减少
      </button>
    </div>
  </div>
</template>
<script>
  //import {mapGetters,mapActions} from 'vuex';
import { mapState } from 'vuex';

    export default{
      methods:{
        login(){
           this.$router.push({path: '/'})
        },
        increment(){
          this.$store.commit('incrementment')
        },
        reducement(){
          this.$store.commit('reducement')
        }
      },
      computed:{
        // i am batman
          // strike(){
          //     return this.$store.state.count
          // }
           ...mapState([
             'count'
           ])
      },
      mounted(){
        
      }
    }
</script>