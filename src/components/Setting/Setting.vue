<template>
  <v-ons-page>
    <div class="setting-header-bar">
      <div class="setting-header-bar-container">
        <img class="setting-profile-img" src="../../assets/images/icon.png">
        <ul class="setting-profile-des">
          <li>
            <span class="setting-user-name">
              请登录
            </span>
          </li>
          <li>
            <span class="setting-user-id">
              ID:1
            </span>
          </li>
        </ul>
      </div>
    </div>
    <v-ons-card>
      <div class="setting-header">
        <b>功能面板</b>
      </div>
      <v-ons-row>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/photo.png" :width="picSize">
            <p style="color: grey;font-size: large">Photo</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/design.png" :width="picSize">
            <p style="color: grey;font-size: large">Design</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/music.png" :width="picSize">
            <p style="color: grey;font-size: large">Music</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/music.png" :width="picSize">
            <p style="color: grey;font-size: large">Music</p>
          </div>
        </v-ons-col>
      </v-ons-row>
      <v-ons-row>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/movie.png" :width="picSize">
            <p style="color: grey;font-size: large">Movie</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/sport.png" :width="picSize">
            <p style="color: grey;font-size: large">Sport</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/art.png" :width="picSize">
            <p style="color: grey;font-size: large">Art</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/art.png" :width="picSize">
            <p style="color: grey;font-size: large">Art</p>
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
            <img src="../../assets/images/photo.png" :width="picSize">
            <p style="color: grey;font-size: large">Photo</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/design.png" :width="picSize">
            <p style="color: grey;font-size: large">Design</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/music.png" :width="picSize">
            <p style="color: grey;font-size: large">Music</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/music.png" :width="picSize">
            <p style="color: grey;font-size: large">Music</p>
          </div>
        </v-ons-col>
      </v-ons-row>
      <v-ons-row>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/movie.png" :width="picSize">
            <p style="color: grey;font-size: large">Movie</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/sport.png" :width="picSize">
            <p style="color: grey;font-size: large">Sport</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/art.png" :width="picSize">
            <p style="color: grey;font-size: large">Art</p>
          </div>
        </v-ons-col>
        <v-ons-col width="25%">
          <div align="center">
            <img src="../../assets/images/art.png" :width="picSize">
            <p style="color: grey;font-size: large">Art</p>
          </div>
        </v-ons-col>
      </v-ons-row>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
  export default {
    data: function () {
      return {
        picSize: '30%'
      }
    },
    methods: {}
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
