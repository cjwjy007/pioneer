<template>
  <v-ons-page>
    <v-ons-pull-hook
      :action="loadItem"
      @changestate="hookState = $event.state"
    >
      <span v-show="hookState === 'initial'"> 下拉刷新 </span>
      <span v-show="hookState === 'preaction'"> 释放 </span>
      <span v-show="hookState === 'action'"> 读取中... </span>
    </v-ons-pull-hook>

    <div class="home-carousel">
      <v-ons-carousel swipeable auto-scroll overscrollable
                      :index.sync="carouselIndex" style="height: 165px">
        <v-ons-carousel-item v-for="img in carouselImg" :key="img.id">
          <img :src="img.src" alt="image" style="width: 100%;height: 240px">
        </v-ons-carousel-item>
      </v-ons-carousel>

      <div class="dots">
      <span :index="dotIndex - 1" v-for="dotIndex in carouselImg.length" :key="dotIndex" style="cursor: pointer"
            @click="carouselIndex = dotIndex - 1">
        {{ carouselIndex === dotIndex - 1 ? '\u25CF' : '\u25CB' }}
      </span>
      </div>
    </div>

    <div v-for="post in posts">
      <v-ons-card>
        <div class="home-posts-header">
          <img class="home-posts-header-icon" :src="post.icon">
          <div class="home-posts-header-info">
            <span class="home-posts-header-name"><b>{{post.name}}</b></span>
            <span class="home-posts-header-date">{{post.time}}</span>
          </div>
          <ons-button class="home-posts-header-arrow" modifier="quiet" @click="actionSheetVisible = true">
            <ons-icon icon="ion-arrow-down-b"></ons-icon>
          </ons-button>
        </div>
        <div class="home-posts-body">
          <span class="home-posts-content">{{post.content}}</span>
          <div v-if="post.img !== null">
            <img :src="post.img" alt="PostImage" style="margin-top: 10px;width: 100%;height: 240px">
          </div>
          <ons-row class="home-icon-group">
            <ons-col>
              <ons-button modifier="quiet">
                <ons-icon icon="ion-reply"><span>{{post.forwards}}</span></ons-icon>
              </ons-button>
            </ons-col>
            <ons-col>
              <ons-button modifier="quiet">
                <ons-icon icon="ion-chatbox-working"><span>{{post.replies}}</span></ons-icon>
              </ons-button>
            </ons-col>
            <ons-col>
              <ons-button modifier="quiet">
                <ons-icon icon="ion-heart"><span>{{post.likes}}</span></ons-icon>
              </ons-button>
            </ons-col>
          </ons-row>
        </div>
      </v-ons-card>
    </div>
    <v-ons-action-sheet
      :visible.sync="actionSheetVisible"
      cancelable
    >
      <v-ons-action-sheet-button icon="md-square-o">添加到收藏</v-ons-action-sheet-button>
      <v-ons-action-sheet-button icon="md-square-o">不喜欢该推荐</v-ons-action-sheet-button>
      <v-ons-action-sheet-button icon="md-square-o" @click="actionSheetVisible = false">取消</v-ons-action-sheet-button>
    </v-ons-action-sheet>

  </v-ons-page>
</template>

<script>
  export default {
    data: function () {
      return {
        actionSheetVisible : false,
        hookState: 'initial',
        posts: [
          {
            icon: 'http://placekitten.com/g/40/40',
            name: 'Cute Kitty',
            time: '2 minutes ago',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            img: null,
            forwards: 2,
            replies: 3,
            likes: 4
          },
          {
            icon: 'http://placekitten.com/g/70/70',
            name: 'Cute Kitty2',
            time: '3 minutes ago',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            img: 'http://placekitten.com/g/327/240',
            forwards: 2,
            replies: 3,
            likes: 4
          }
        ],
        myProp: '123',
        carouselIndex: 0,
        dotIndex: 0,
        carouselImg: [
          {
            id: 1,
            src: 'http://placekitten.com/g/327/200'
          }, {
            id: 2,
            src: 'http://placekitten.com/g/327/240'
          }, {
            id: 3,
            src: 'http://placekitten.com/g/300/240'
          }
        ]
      }
    },
    methods: {
      loadItem(done) {
        setTimeout(() => {
          done();
        }, 400);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dots {
    text-align: center;
    font-size: 27px;
    color: #fff;
    position: relative;
    bottom: 40px;
    left: 0;
    right: 0;
  }

  .home-carousel {
    margin-bottom: -30px
  }

  .home-posts-header {
    display: block;
    margin-bottom: 10px;
  }

  .home-posts-header-icon {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 0;
    float: left;
  }

  .home-posts-header-name {
    width: 80%;
    display: block;
  }

  .home-posts-header-date {
    width: 100%;
    display: block;
  }

  .home-posts-header-info {
    margin-left: 50px;
  }

  .home-posts-header-arrow {
    color: #657786;
    display: flex;
    float: right;
    position: relative;
    bottom: 40px;
  }

  .home-icon-group ons-icon span {
    margin-left: 7px;
  }

  .home-posts-content img {
    display: block;
    margin-top: 10px;
  }
</style>
