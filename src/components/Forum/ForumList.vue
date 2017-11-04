<template>
  <v-ons-page>
    <custom-toolbar backLabel="Forum" :title="title">
    </custom-toolbar>
    <v-ons-list>
      <v-ons-lazy-repeat v-if="getListFinished"
                         :render-item="renderItem"
                         :length="forumList.length"
      >
      </v-ons-lazy-repeat>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
  import Vue from 'vue'
  import PostDetail from './PostDetail.vue'
  import {getPosts} from '../../apis/forum/post'

  export default {
    mounted: function () {
      this.getList();
    },
    data: function () {
      return {
        getListFinished: false,
        renderItem:
          i => {
            const _this = this;
            const item = this.forumList[i];
            return new Vue({
              template: `
            <v-ons-list-item :key="index" @click="pushPostDetail(listItem.postId)">
              <div class="center">
                <span class="list-item__title">{{listItem.postTitle}}</span>
                <span class="list-item__subtitle">
                  <div class="pull-left">
                  <i class="icon ion-person"></i>{{listItem.lastReplyName}}
                  </div>
                  <div class="pull-right">
                  <i class="icon ion-android-time"></i>{{listItem.lastReplyTime}}
                  <i class="icon ion-chatbox-working"></i>{{listItem.replyNum}}
                  </div>
                </span>
              </div>
            </v-ons-list-item>
          `,
              data() {
                return {
                  index: i,
                  listItem: item
                };
              },
              methods:{
                pushPostDetail(postId){
                  _this.$store.commit('navigator/push', {
                    extends: PostDetail,
                    data() {
                      return {
                        forumName: _this.title,
                        postId: postId
                      }
                    }
                  });
                }
              }
            })
          },
        forumList: []
      }
    },
    methods: {
      getList() {
        getPosts(this.title).then(response => {
          this.forumList = response.data;
          this.getListFinished = true;
        }, response => {
        })
      }
    }
  }
</script>

