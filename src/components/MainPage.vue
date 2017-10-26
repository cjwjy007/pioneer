<template>
  <v-ons-page>
    <ons-toolbar id="general-toolbar">
      <div class="left">
        <ons-button modifier="quiet" @click="$store.commit('splitter/toggle')">
          <img class="profile-thumbnail" src="http://placekitten.com/g/70/70">
        </ons-button>
      </div>
      <div id="toolbar-center" class="center">{{title}}</div>
      <div id="toolbar-right" class="right">
        <ons-toolbar-button>
          <ons-icon id="toolbar-icon" icon="ion-compose, material:"></ons-icon>
        </ons-toolbar-button>
      </div>
    </ons-toolbar>

    <v-ons-tabbar position="auto"
                  :tabs="tabs"
                  :visible="true"
                  :index.sync="activeIndex">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>

  import Home from './Home/Home.vue';
  import Forum from './Forum/Forum.vue';
  import Chat from './Chat/Chat.vue';
  import Setting from './Setting/Setting.vue';

  export default {
    name: 'main',
    data() {
      return {
        activeIndex: 1,
        tabs: [
          {
            icon: 'ion-home',
            label: '主页',
            page: Home,
            props: {
              myProp: 'This is a page prop!'
            },
            key: "homePage"
          },
          {
            icon: 'ion-chatboxes',
            label: '论坛',
            page: Forum,
            key: "forumPage"
          },
          {
            icon: 'ion-ios-email',
            label: '聊天',
            page: Chat,
            badge: 7,
            key: "chatPage"
          },
          {
            icon: 'ion-ios-settings',
            label: '设置',
            page: Setting,
            key: "settingPage"
          }
        ]
      }
    },
    methods: {
      md() {
        return this.$ons.platform.isAndroid();
      }
    },
    computed: {
      title() {
        return this.tabs[this.activeIndex].label;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    text-align: center;
  }

  img {
    max-width: 300px;
  }

  #general-toolbar .left,
  #general-toolbar .right {
    max-width: 15%;
    text-align: center;
  }

  #general-toolbar .center {
    width: 90%;
  }

  #general-toolbar ons-toolbar-button:not(.toolbar-button--material),
  .profile-thumbnail {
    border-radius: 50%;
    height: 28px;
    margin-top: 5px;
    width: 28px;
  }

  ons-list-title:not(:first-of-type) {
    margin-top: 30px;
  }

  ons-card {
    text-align: center;
  }

  ons-list-item, ons-card {
    cursor: pointer;
  }
</style>
