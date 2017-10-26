<template>
  <v-ons-page>
    <div class="search-bar">
      <input type="text" placeholder="搜索从这里开始...">
      <button @click="searchForum"></button>
    </div>
    <v-ons-row>
      <v-ons-col width="33%">
        <div align="center">
          <img src="../../assets/images/photo.png" :width="picSize" @click="pushPage('Photo')">
          <p style="color: grey;font-size: large">Photo</p>
        </div>
      </v-ons-col>
      <v-ons-col width="33%">
        <div align="center">
          <img src="../../assets/images/design.png" :width="picSize" @click="pushPage('Design')">
          <p style="color: grey;font-size: large">Design</p>
        </div>
      </v-ons-col>
      <v-ons-col width="33%">
        <div align="center">
          <img src="../../assets/images/music.png" :width="picSize" @click="pushPage('Music')">
          <p style="color: grey;font-size: large">Music</p>
        </div>
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col width="33%">
        <div align="center">
          <img src="../../assets/images/movie.png" :width="picSize" @click="pushPage('Movie')">
          <p style="color: grey;font-size: large">Movie</p>
        </div>
      </v-ons-col>
      <v-ons-col width="33%">
        <div align="center">
          <img src="../../assets/images/sport.png" :width="picSize" @click="pushPage('Sport')">
          <p style="color: grey;font-size: large">Sport</p>
        </div>
      </v-ons-col>
      <v-ons-col width="33%">
        <div align="center">
          <img src="../../assets/images/art.png" :width="picSize" @click="pushPage('Art')">
          <p style="color: grey;font-size: large">Art</p>
        </div>
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col width="33%">
        <div align="center">
          <img src="../../assets/images/handcraft.png" :width="picSize" @click="pushPage('HandCraft')">
          <p style="color: grey;font-size: large">HandCraft</p>
        </div>
      </v-ons-col>
      <v-ons-col width="33%">
        <div align="center">
          <img src="../../assets/images/painting.png" :width="picSize" @click="pushPage('Painting')">
          <p style="color: grey;font-size: large">Painting</p>
        </div>
      </v-ons-col>
      <v-ons-col width="33%">
        <div align="center">
          <img src="../../assets/images/coding.png" :width="picSize" @click="pushPage('Coding')">
          <p style="color: grey;font-size: large">Coding</p>
        </div>
      </v-ons-col>
    </v-ons-row>

  </v-ons-page>
</template>

<script>
  import ForumList from './ForumList.vue';

  export default {
    data: function () {
      return {
        picSize: '80%'
      }
    },
    methods: {
      searchForum() {
        return false;
      },
      pushPage(title) {
        this.$store.commit('navigator/options', {
          // Sets animations
          animation: 'default',
          // Resets default options
          callback: () => this.$store.commit('navigator/options', {})
        });
        this.$store.commit('navigator/push', {
          extends: ForumList,
          data() {
            return {
              title: title
            }
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    box-sizing: border-box;
  }


  .search-bar {
    position: relative;
    width: 97%;
    margin: 10px 0px 10px 5px;
    background: #ffffff;
  }

  .search-bar input {
    font-size: 15px;
    width: 100%;
    height: 42px;
    padding-left: 10px;
    border: 2px solid #6990af;
    border-radius: 5px;
    outline: none;
    background: #ffffff;
    color: #9E9C9C;
  }

  .search-bar button {
    position: absolute;
    top: 0;
    right: 0px;
    width: 42px;
    height: 42px;
    border: none;
    background: #6990af;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  .search-bar button:before {
    content: "\f002";
    font-family: FontAwesome;
    font-size: 16px;
    color: #F9F0DA;
  }
</style>
