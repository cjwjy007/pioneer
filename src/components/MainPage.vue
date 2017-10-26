<template>
  <v-ons-page :style="swipePosition">
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
                  modifier="autogrow white-content"
                  :on-swipe="md ? onSwipe : null"
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

  // Just a linear interpolation formula
  const lerp = (x0, x1, t) => parseInt((1 - t) * x0 + t * x1, 10);
  // RGB colors
  const red = [244, 67, 54];
  const blue = [30, 136, 229];
  const purple = [103, 58, 183];

  export default {
    name: 'main',
    data() {
      return {
        shutUp: !this.md,
        colors: red,
        animationOptions: {},
        topPosition: 0,
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
            label: '我的',
            page: Setting,
            key: "settingPage"
          }
        ]
      }
    },
    methods: {
      onSwipe(index, animationOptions) {
        // Apply the same transition as ons-tabbar
        this.animationOptions = animationOptions;
        // Interpolate colors and top position
        const a = Math.floor(index), b = Math.ceil(index), ratio = index % 1;
        this.colors = this.colors.map((c, i) => lerp(this.tabs[a].theme[i], this.tabs[b].theme[i], ratio));
        this.topPosition = lerp(this.tabs[a].top || 0, this.tabs[b].top || 0, ratio);
      },
    },
    computed: {
      title() {
        return this.tabs[this.activeIndex].label;
      },
      swipePosition() {
        return this.md && {
          top: this.topPosition + 'px',
          transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
        }
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
