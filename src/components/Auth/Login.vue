<template>
  <v-ons-page>
    <div class="background-image">
      <v-ons-toolbar modifier='transparent'>
        <div class="left">
          <v-ons-back-button>
            返回
          </v-ons-back-button>
        </div>
      </v-ons-toolbar>
      <div class="col" align="center">
        <div class="app-logo">
          <div><img src="../../assets/images/logo_green.png" style="width: 150px;margin-top: 30px"></div>
          <div><img src="../../assets/images/TITLE.png" style="width: 150px;margin-bottom: 20px"></div>
        </div>
         <div id="loginform">
          <form>
            <input type="text" placeholder="用户名或邮箱" v-model="userInfo.username">
            <input type="password" placeholder="密码" v-model="userInfo.password">
            <button class="login-button" @click="checkLogin"><i class="fa fa-arrow-right"></i></button>
          </form>
          <div id="note">
            <a @click="register">没有账号？</a>
          </div>
        </div>
      </div>
    </div>
  </v-ons-page>

</template>

<script>
  import Register from './Register.vue'
  export default {
    data: function () {
      return {
        userInfo: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      checkLogin() {
        const event = event || window.event;
        event.preventDefault();
        if(this.userInfo.username && this.userInfo.password){
          this.$store.dispatch('auth/commitLogin', this.userInfo);
        }else{
          this.$ons.notification.toast('请输入用户名与密码', { animation: "fall", buttonLabel: 'x', timeout: 1500 })
        }
      },
      register(){
        this.$store.commit('navigator/push', {
          extends: Register,
          data() {
            return {}
          }
        });
      }
    }
  }
</script>

<style>
  .background-image {
    background-image: url('../../assets/images/background.jpg');
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
  }

  .app-logo{
    opacity: 0.8;
  }

  #loginform {
    background: #222526;
    width: 80%;
    height: auto;
    position: relative;
    margin: 0 auto;
    padding: 20px;
  }

  .background-image input {
    display: block;
    margin: 0px auto 15px;
    border-radius: 5px;
    background: #333333;
    width: 85%;
    padding: 12px 20px 12px 10px;
    border: none;
    color: #929999;
    box-shadow: inset 0px 1px 5px #272727;
    font-size: 0.8em;
    -webkit-transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -ms-transition: 0.5s ease;
    transition: 0.5s ease;
  }

  .background-image input:focus {
    -webkit-transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -ms-transition: 0.5s ease;
    transition: 0.5s ease;
    box-shadow: 0px 0px 5px 1px #161718;
  }

  .background-image .login-button {
    background: hsl(161, 53%, 61%);
    border-radius: 50%;
    border: 10px solid #222526;
    font-size: 0.9em;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    width: 85px;
    height: 85px;
    position: absolute;
    top: 24px;
    right: 4px;
    text-align: center;
    -webkit-transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -ms-transition: 0.5s ease;
    transition: 0.5s ease;
  }

  .background-image button:hover {
    background: #222526;
    border-color:hsl(161, 53%, 61%);
    -webkit-transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -ms-transition: 0.5s ease;
    transition: 0.5s ease;
  }

  .background-image button i {
    font-size: 20px;
    -webkit-transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -ms-transition: 0.5s ease;
    transition: 0.5s ease;
  }

  .background-image button:hover i {
    color: hsl(161, 53%, 61%);
    -webkit-transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -ms-transition: 0.5s ease;
    transition: 0.5s ease;
  }

  *:focus {
    outline: none;
  }


  .background-image h1 {
    text-align: center;
    color: #fff;
    font-size: 13px;
    padding: 12px 0px;
  }

  #note {
    color: #88887a;
    font-size: 0.9em;
    text-align: left;
    padding-left: 5px;
  }

  .background-image a {
    color: #88887a;
    text-decoration: none;
    -webkit-transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -ms-transition: 0.5s ease;
    transition: 0.5s ease;
  }

  .background-image a:hover {
    color: #fff;
    margin-left: 5px;
    -webkit-transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -ms-transition: 0.5s ease;
    transition: 0.5s ease;
  }

  .background-image .back-button span{
    color: white;
    fill: white;
  }

</style>
