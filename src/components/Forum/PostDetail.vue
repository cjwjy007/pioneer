<template>
  <v-ons-page>
    <custom-toolbar :backLabel="forumName" title="主题">
      <div slot="right">
        <ons-toolbar-button @click="actionSheetVisible=true">
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
                  <ons-icon icon="ion-ios-compose-outline" @click="newReply(reply.user)"></ons-icon>
                </ons-button>
              </ons-col>
              <ons-col>
                <ons-button modifier="quiet">
                  <div v-if="!reply.isLike">
                    <ons-icon icon="ion-ios-star-outline" @click="reply.likes++;reply.isLike=!reply.isLike">
                      <span>{{reply.likes}}</span></ons-icon>
                  </div>
                  <div v-else>
                    <ons-icon icon="ion-ios-star" @click="reply.likes--;reply.isLike=!reply.isLike"><span>{{reply.likes}}</span>
                    </ons-icon>
                  </div>
                </ons-button>
              </ons-col>
            </ons-row>
          </div>
        </div>
      </v-ons-card>
    </div>
    <v-ons-action-sheet
      :visible.sync="actionSheetVisible"
      cancelable
    >
      <v-ons-action-sheet-button icon="md-square-o" @click="newReply(null);actionSheetVisible = false;">回复</v-ons-action-sheet-button>
      <v-ons-action-sheet-button icon="md-square-o" @click="addFavorite();actionSheetVisible = false;">添加到收藏</v-ons-action-sheet-button>
      <v-ons-action-sheet-button icon="md-square-o">举报</v-ons-action-sheet-button>
      <v-ons-action-sheet-button icon="md-square-o" @click="actionSheetVisible = false">取消</v-ons-action-sheet-button>
    </v-ons-action-sheet>
  </v-ons-page>
</template>

<script>
  import {getPostDetail,addToFavorite} from '../../apis/forum/post'
  import NewReply from './NewReply.vue'

  export default {
    mounted: function () {
      this.$nextTick(() => {
        this.getPost();
      });
    },
    data: function () {
      return {
        actionSheetVisible: false,
        getPostFinished: false,
        isLike: false,
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
            let userInfo = {
              type: 'name',
              info: this.replies[replyIdx].user
            };
            this.$store.dispatch('auth/getUserIcon', userInfo).then(response => {
              let newItem = this.replies[replyIdx];
              newItem.icon = response.data.iconUrl;
              this.$set(this.replies, replyIdx, newItem);
            }, response => {
            })
          }
        }, response => {
        });
      },
      newReply(replyTo) {
        let postId = this.postId;
        this.$store.commit('navigator/push', {
          extends: NewReply,
          data() {
            return {
              postId: postId,
              replyTo: replyTo
            }
          }
        });
      },
      addFavorite(){
        addToFavorite(this.postId).then(response => {
          this.$ons.notification.toast('收藏成功', {animation: "fall", buttonLabel: 'x', timeout: 1500});
        }, response => {
          console.log(response);
        })
      }
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
