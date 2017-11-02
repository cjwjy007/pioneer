<template>
  <v-ons-page>
    <div>
      <div class="setting-header-bar">
        <div class="setting-header-bar-container">
          <img class="setting-profile-img" src="http://placekitten.com/g/70/70">
          <ul class="setting-profile-des">
            <li>
            <span class="setting-user-name">
              {{userName}}
            </span>
            </li>
            <li>
            <span class="menu-user-id">
              ID:{{userID}}
            </span>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="isLogin">
        <div class="menu-info-bar">
          <v-ons-row>
            <v-ons-col class="menu-info-bar-item">
              <a><span>发帖</span> <b>3</b></a>
            </v-ons-col>
            <v-ons-col class="menu-info-bar-item">
              <a><span>关注</span> <b>4</b></a>
            </v-ons-col>
            <v-ons-col class="menu-info-bar-item">
              <a><span>粉丝</span> <b>5</b></a>
            </v-ons-col>
          </v-ons-row>
        </div>
        <div class="menu-list-bar">
          <v-ons-list>
            <v-ons-list-item tappable modifier="longdivider">修改信息</v-ons-list-item>
            <v-ons-list-item tappable modifier="longdivider" @click="logout">退出登录</v-ons-list-item>
          </v-ons-list>
        </div>
      </div>
      <div v-else>
        <div class="menu-list-bar">
          <v-ons-list>
            <v-ons-list-item tappable modifier="longdivider" @click="login">登录</v-ons-list-item>
          </v-ons-list>
        </div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import Login from './Auth/login.vue';
  export default {
    name: 'menu',
    data() {
      return {
        essentialLinks: [
          {
            label: 'Docs',
            link: 'https://onsen.io/v2/docs/guide/vue/',
            icon: 'fa-book'
          },
          {
            label: 'Gitter Chat',
            link: 'https://gitter.im/OnsenUI/OnsenUI',
            icon: 'fa-commenting'
          },
          {
            label: 'Forum',
            link: 'https://community.onsen.io',
            icon: 'ion-chatboxes'
          },
          {
            label: 'Twitter',
            link: 'https://twitter.com/Onsen_UI',
            icon: 'fa-twitter'
          },
          {
            label: 'Playground',
            link: 'https://tutorial.onsen.io/',
            icon: 'fa-graduation-cap'
          }
        ]
      }
    },
    methods: {
      goTo(url) {
        window.open(url, '_blank')
      },
      login(){
        if(!this.isLogin){
          this.$store.commit('navigator/push', Login);
        }
      },
      logout(){
        if(this.isLogin){
          this.$store.dispatch('auth/commitLogout');
        }
      }
    },
    computed: {
      userName: function () {
        return this.$store.state.auth.token !== null ? this.$store.state.auth.name : '请登录';
      },
      userID: function () {
        return this.$store.state.auth.token !== null ? this.$store.state.auth.id : '';
      },
      isLogin: function () {
        return this.$store.state.auth.token !== null;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    list-style-type: none;
  }

  .setting-profile-img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    float: left;
  }

  .setting-header-bar {
    background-color: #ffffff;
    height: 90px;
    border: 1px solid #d1dbe5;
  }

  .menu-info-bar {
    border: 1px solid #d1dbe5;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    margin-bottom: 1px;
  }

  .menu-list-bar {
    border: 1px solid #d1dbe5;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    margin-bottom: 1px;
  }

  .menu-info-bar-item {
    border-right: 1px solid #d1dbe5;
  }

  .menu-info-bar-item span {
    width: 100%;
    float: left;
    text-align: center;
    border-top: 1px solid #d1dbe5;
    font-size: 15px;
    padding: 5px 0px;
  }

  .menu-info-bar-item b {
    width: 100%;
    float: left;
    text-align: center;
    border-top: 1px solid #d1dbe5;
    font-size: 20px;
    padding: 5px 0px;
  }

  .setting-header-bar-container {
    margin: 0px;
    padding: 5% 5%;
  }

  .setting-profile-des {
    width: 60%;
    float: left;
    margin: 0px 8px;
    padding: 0px 5px;
  }

  .setting-user-name {
    font-size: 20px;
  }
</style>
