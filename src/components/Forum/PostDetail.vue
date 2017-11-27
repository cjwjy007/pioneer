<template>
  <v-ons-page>
    <custom-toolbar :backLabel="forumName" title="主题">
      <div slot="right">
        <ons-toolbar-button @click="$ons.openActionSheet({
              cancelable: true,
              buttons: [
                '回复',
                '添加到收藏',
                '举报',
                {
                  label: '取消',
                  icon: 'md-close'
                }
              ]
            })">
          <ons-icon id="toolbar-icon" icon="ion-ios-list-outline, material:"></ons-icon>
        </ons-toolbar-button>
      </div>
    </custom-toolbar>
    <div class="content">
      <v-ons-card style="text-align: center;font-size: 18px">
        <b>{{title}}</b>
      </v-ons-card>
      <v-ons-card style="padding-bottom: 40px" v-for="reply in replies" :key="reply.floor">
        <div class="home-posts-header">
          <img class="home-posts-header-icon" :src="reply.icon">
          <div class="home-posts-header-info">
            <div>
              <b>{{reply.user}}</b>
              <span class="pull-right" v-if="reply.floor === 0">楼主</span>
              <span class="pull-right" v-else>{{reply.floor}}楼</span>
            </div>
          </div>
        </div>

        <div class="post-content">
          <div>
            {{reply.content}}
          </div>
        </div>

        <div class="footer">
          <div class="pull-right">
            <ons-row class="home-icon-group">
              <ons-col>
                <ons-button modifier="quiet">
                  <ons-icon icon="ion-chatbox-working"></ons-icon>
                </ons-button>
              </ons-col>
              <ons-col>
                <ons-button modifier="quiet">
                  <ons-icon icon="ion-star"></ons-icon>
                </ons-button>
              </ons-col>
              <ons-col>
                <ons-button modifier="quiet">
                  <ons-icon icon="ion-thumbsup" @click="reply.likes++"><span>{{reply.likes}}</span></ons-icon>
                </ons-button>
              </ons-col>
            </ons-row>
          </div>
        </div>
      </v-ons-card>
    </div>
  </v-ons-page>
</template>

<script>
  import {getPostDetail} from '../../apis/forum/post'

  export default {
    mounted: function () {
      this.$nextTick(() => {
        this.getPost();
      });
    },
    data: function () {
      return {
        getPostFinished: false,
        title: "",
        content: "",
        replies: []
      }
    },
    methods: {
      getPost() {
        getPostDetail(this.postId).then(response => {
          this.title = response.data.title;
          this.content = response.data.content;
          this.replies = response.data.replies;
          this.getPostFinished = true;
          for (let replyIdx in this.replies) {
            this.$store.dispatch('auth/getUserIcon', 'name', this.replies[replyIdx].user).then(response => {
              let newItem = this.replies[replyIdx];
              newItem.icon = response.data.iconUrl;
              this.$set(this.replies, replyIdx, newItem);
            }, response => {
            })
          }
        }, response => {
        });
      },
    }
  }
</script>

<style scoped>
  .home-posts-header {
    display: block;
    margin-bottom: 10px;
    height: 40px;
  }

  .home-posts-header-icon {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 0;
    float: left;
  }

  .home-posts-header-info {
    margin-left: 50px;
  }

  .home-icon-group {
    margin-left: 7px;
  }

  .post-content {
    border-top: 1px #e7e7e7 solid;
    border-bottom: 1px #e7e7e7 solid;
    padding: 15px 0px;
  }
</style>
