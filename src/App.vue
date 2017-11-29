<template>
  <v-ons-page id="app">
    <v-ons-splitter>
      <v-ons-splitter-side swipeable collapse width="250px"
                           :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
                           :open.sync="menuIsOpen">
        <menu-page :userName="userName"
                   :userId="userId"
                   :userIcon="userIcon"
                   :isLogin="isLogin"></menu-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <main-page :userName="userName"
                   :userId="userId"
                   :userIcon="userIcon"
                   :isLogin="isLogin"></main-page>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
  import store from './services/storage';
  import MainPage from './components/MainPage'
  import MenuPage from './components/MenuPage'
  import anonymous_user from "./assets/images/anonymous_user.png";

  export default {
    name: 'app',
    data() {
      return {
        userIcon: this.initUserIcon()
      }
    },
    methods: {
      initUserIcon() {
        let userInfo = store.getObject('userInfo')
        if (userInfo && userInfo.icon) {
          return store.getObject('userInfo').icon;
        } else {
          return anonymous_user;
        }
      },
      getUserIcon() {
        this.$store.dispatch('auth/getUserIcon', {
          type: 'name',
          info: this.userName
        }).then(response => {
          this.userIcon = response.data.iconUrl;
          let userInfo = store.getObject('userInfo');
          userInfo.icon = response.data.iconUrl;
          store.setObject('userInfo', userInfo);
        }, response => {
        })
      }
    },
    watch: {
      isLogin: function (login) {
        if (login) {
          this.getUserIcon();
        } else {
          this.userIcon = anonymous_user;
        }
      }
    },
    computed: {
      menuIsOpen: {
        get() {
          return this.$store.state.splitter.open
        },
        set(newValue) {
          this.$store.commit('splitter/toggle', newValue)
        }
      },
      userName: function () {
        return this.$store.state.auth.token !== null ? this.$store.state.auth.name : '请登录';
      },
      userId: function () {
        return this.$store.state.auth.token !== null ? this.$store.state.auth.id : '';
      },
      isLogin: function () {
        return this.$store.state.auth.token !== null;
      }
    },
    components: {
      MainPage,
      MenuPage
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body {
    overflow: hidden;
    -ms-content-zooming: none;
  }
</style>
