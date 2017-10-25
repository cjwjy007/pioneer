<template>
  <v-ons-page>
    <div>
      <div class="menu-header-bar">
        <div class="menu-header-bar-container">
          <img class="menu-profile-img" src="http://placekitten.com/g/70/70">
          <ul class="menu-profile-des">
            <li>
            <span class="menu-user-name">
              Admin
            </span>
            </li>
            <li>
            <span class="menu-user-id">
              ID:12345
            </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-info-bar">
        <v-ons-row>
          <v-ons-col class="menu-info-bar-item">
            <a><span>Posts</span> <b>3</b></a>
          </v-ons-col>
          <v-ons-col class="menu-info-bar-item">
            <a><span>Follows</span> <b>3</b></a>
          </v-ons-col>
          <v-ons-col class="menu-info-bar-item">
            <a><span>Fans</span> <b>3</b></a>
          </v-ons-col>
        </v-ons-row>
      </div>
      <div class="menu-list-bar">
        <v-ons-list>
          <v-ons-list-item tappable modifier="longdivider">修改信息</v-ons-list-item>
          <v-ons-list-item tappable modifier="longdivider">退出登录</v-ons-list-item>
        </v-ons-list>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    list-style-type: none;
  }

  .menu-profile-img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    float: left;
  }

  .menu-header-bar {
    background-color: #ffffff;
    height: 90px;
    border: 1px solid #d1dbe5;
  }

  .menu-info-bar{
    border: 1px solid #d1dbe5;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    margin-bottom: 1px;
  }

  .menu-list-bar{
    border: 1px solid #d1dbe5;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    margin-bottom: 1px;
  }

  .menu-info-bar-item{
    border-right: 1px solid #d1dbe5;
  }

  .menu-info-bar-item span{
    width: 100%;
    float:left;
    text-align:center;
    border-top: 1px solid #d1dbe5;
    font-size: 15px;
    padding: 5px 0px;
  }

  .menu-info-bar-item b{
    width: 100%;
    float:left;
    text-align:center;
    border-top: 1px solid #d1dbe5;
    font-size: 20px;
    padding: 5px 0px;
  }

  .menu-header-bar-container {
    margin: 0px;
    padding: 5% 5%;
  }

  .menu-profile-des {
    width: 50%;
    float: left;
    margin: 0px 8px;
    padding: 0px 5px;
  }

  .menu-user-name {
    font-size: 30px;
  }
</style>
