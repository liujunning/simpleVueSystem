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
      <div style="width:200px;height:200px;text-align:center;border:4px solid red;margin-left:100px;font-size:19px;line-height:200px">
          {{ numb }}
      </div>
       <div style="width:200px;height:200px;text-align:center;border:4px solid green;margin-left:100px;font-size:12px;line-height:200px;display:inline-block" v-for="(item,index) in double" :key="item.text">
          {{ item }}
      </div>
      <div>
         mapGetters获取数组长度 ： {{ double.length }}
      </div>
      <button @click="increment()" style="margin-left:30px;margin-top:10px">
        点击增加
      </button>
      <button @mousedown="reducement()" style="margin-left:30px;margin-top:10px">
        点击减少
      </button>
      <button @click="ding()">
        清除定时器
      </button>
      <div>
        <button @click="chang()">
          常量按钮
        </button>
      </div>
      <div>
        <button @click="incrementment({ amount:fast })">
          mapMutations按钮
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  //import {mapGetters,mapActions} from 'vuex';
import { mapState,mapGetters,mapMutations } from 'vuex';

    export default{
      data(){
        return{
          timer:'',
          fast:89
        }
      },
      created(){
        console.log( this.incrementment({ amount: 18 }) )
        
      },

      methods:{
        login(){
           this.$router.push({path: '/'})
        },
        increment(){


          this.$store.commit({
            type:'incrementment',
            amount:100
          })

         

        },
        reducement(){

         this.timer = setInterval(()=>{
              this.$store.commit('reducement')
          },1000)
          
        },
        ding(){
          clearInterval(
            this.timer
          )
        },
        chang(){
          this.$store.commit('SOME_MUTATION')
        },
        ...mapMutations([
          'incrementment'
        ])
      },
      computed:{
        // i am batman
          // strike(){
          //     return this.$store.state.count
          // }
           ...mapState([
             'count',
             'numb',
             'todos'
           ]),
  
           ...mapGetters({
             double:'doneTodosCount'
           }


             
           )
          

      },
      mounted(){
        //getters 调用  
       // console.log(this.$store.getters.doneTodosCount)
        
      }
    }
</script>