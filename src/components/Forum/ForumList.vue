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
    <custom-toolbar backLabel="论坛" :title="title">
      <div slot="right">
        <ons-toolbar-button @click="newPost">
          <ons-icon id="toolbar-icon" icon="ion-compose, material:"></ons-icon>
        </ons-toolbar-button>
      </div>
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
  import NewPost from './NewPost.vue'
  import {getPosts} from '../../apis/forum/post'

  export default {
    mounted: function () {
      this.getList();
    },
    data: function () {
      return {
        hookState: 'initial',
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
                  <i class="icon ion-person"></i>{{listItem.postUser}}
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
              methods: {
                pushPostDetail(postId) {
                  _this.$store.dispatch('history/pushBrowsingHistory', this.listItem.postId);
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
      },
      newPost(){
        const title = this.title;
        this.$store.commit('navigator/push', {
          extends: NewPost,
          data() {
            return {
              forumName: title,
            }
          }
        });
      },
      loadItem(done) {
        getPosts(this.title).then(response => {
          this.forumList = response.data;
          this.getListFinished = true;
          done();
        }, response => {
        })
      }
    }
  }
</script>

