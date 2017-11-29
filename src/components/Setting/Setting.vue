<template>
  <v-ons-page>
    <!--<div class="setting-header-bar">-->
      <!--<div class="setting-header-bar-container">-->
        <!--<ul class="setting-profile-des">-->
          <!--<li>-->
            <!--<span class="setting-user-name">-->
              <!--{{userName}}-->
            <!--</span>-->
            <!--<span class="setting-user-id">-->
              <!--ID:{{userId}}-->
            <!--</span>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
    <v-ons-card>
      <div class="setting-header">
        <b>功能面板</b>
      </div>
      <v-ons-row>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/photo.png" :width="picSize" @click="pushPage(authPages.post,true)">
            <p style="color: grey;font-size: large">帖子</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/design.png" :width="picSize" @click="pushPage(authPages.reply,true)">
            <p style="color: grey;font-size: large">回复</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/music.png" :width="picSize" @click="pushPage(authPages.favorite,true)">
            <p style="color: grey;font-size: large">收藏</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/art.png" :width="picSize" @click="pushPage(authPages.history,true)">
            <p style="color: grey;font-size: large">历史</p>
          </div>
        </v-ons-col>
      </v-ons-row>
      <v-ons-row>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/movie.png" :width="picSize" @click="pushPage(authPages.mentioned,true)">
            <p style="color: grey;font-size: large">提醒</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/sport.png" :width="picSize" @click="pushPage(authPages.discover,true)">
            <p style="color: grey;font-size: large">发现</p>
          </div>
        </v-ons-col>
      </v-ons-row>
    </v-ons-card>
    <v-ons-card>
      <div class="setting-header">
        <b>设置面板</b>
      </div>
      <v-ons-row>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/photo.png" :width="picSize" @click="pushPage(funcPages.clearCache,false)">
            <p style="color: grey;font-size: large">清理缓存</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/design.png" :width="picSize" @click="pushPage(funcPages.version,false)">
            <p style="color: grey;font-size: large">版本</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/music.png" :width="picSize" @click="pushPage(funcPages.connectUs,false)">
            <p style="color: grey;font-size: large">联系我们</p>
          </div>
        </v-ons-col>
      </v-ons-row>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
  import Login from '../Auth/Login.vue';
  import post from './MyPost.vue';
  import reply from './MyReply.vue';
  import favorite from './MyFavorite.vue';
  import history from './MyHistory.vue';
  import mentioned from './Mentioned.vue';
  import discover from './Discover.vue';
  import clearCache from  './ClearCache.vue';
  import version from  './Version.vue';
  import connectUs from  './ConnectUs.vue';
  export default {
    props:['userName','userId','userIcon','isLogin'],
    data: function () {
      return {
        picSize: '30%',
        authPages : {
          post: post,
          reply: reply,
          favorite: favorite,
          history: history,
          mentioned: mentioned,
          discover: discover
        },
        funcPages : {
          clearCache: clearCache,
          version: version,
          connectUs: connectUs
        }
      }
    },
    methods: {
      pushPage(page, isAuthPage) {
        if(isAuthPage && !this.isLogin){
          this.$store.commit('navigator/setNextPage', page);
          this.$store.commit('navigator/push', Login);
        }else{
          this.$store.commit('navigator/push', page);
        }

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .setting-header {
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 15px;
  }

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
    background-color: rgba(201, 233, 255, 0.1);
    height: 70px;
    border-top: 1px solid #d1dbe5;
    border-bottom: 1px solid #d1dbe5;
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
    padding: 2% 5%;
  }

  .setting-profile-des {
    width: 50%;
    float: left;
    margin: 0px 8px;
    padding: 0px 5px;
  }

  .setting-user-name {
    font-size: 26px;
  }
</style>
