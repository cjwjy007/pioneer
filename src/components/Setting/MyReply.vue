<template>
  <v-ons-page>
    <custom-toolbar backLabel="我的" :title="'我的回复'">
    </custom-toolbar>
    <div class="content">
      <v-ons-list>
        <v-ons-list-item v-for='listItem in postList' :key="listItem.postId"
                         @click="pushPostDetail(listItem.postId,listItem.floor)">
          <div class="center">
            <span class="list-item__title">{{listItem.postTitle}}</span>
            <span class="list-item__subtitle">
                  <div class="pull-left">
                  <i class="icon ion-person"></i>{{listItem.postUser}}
                  </div>
                  <div class="pull-right">
                  <i class="icon ion-android-time"></i>{{listItem.lastReplyTime}}
                  <i class="icon ion-chatbox-working"></i>{{listItem.replyNum}}
                  </div>
                </span>
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
  import PostDetail from '../Forum/PostDetail.vue'
  import {getMyReply, getPostOverview} from '../../apis/forum/post'

  export default {
    mounted: function () {
      this.getList();
    },
    data: function () {
      return {
        getListFinished: false,
        postList: []
      }
    },
    methods: {
      getList() {
        getMyReply().then(response => {
          let posts = response.data.replyPosts;
          for (let p of posts) {
            getPostOverview(p.postId).then(response => {
              let post = response.data;
              post.floor = p.floor;
              this.postList.push(post);
              if (this.postList.length === posts.length) {
                this.getListFinished = true;
              }
            }, response => {
            })
          }
        }, response => {
        });
      },
      pushPostDetail(postId, floor) {
        this.$store.commit('navigator/push', {
          extends: PostDetail,
          data() {
            return {
              forumName: '我的回复',
              postId: postId,
              myFloor: floor
            }
          }
        });
      }
    }
  }
</script>

