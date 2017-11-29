<template>
  <v-ons-page>
    <custom-toolbar backLabel="我的" :title="'浏览历史'">
      <div slot="right">
        <ons-toolbar-button @click="alertDialog1Visible = true;">
          <ons-icon id="toolbar-icon" icon="ion-trash-a, material:"></ons-icon>
        </ons-toolbar-button>
      </div>
    </custom-toolbar>
    <div class="content">
      <v-ons-list>
        <v-ons-list-item v-for='listItem in historyList' :key="listItem.postId" @click="pushPostDetail(listItem.postId)">
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
    <v-ons-alert-dialog modifier="rowfooter"
                        :visible.sync="alertDialog1Visible"
    >
      <span slot="title">历史记录</span>
      清空历史记录
      <template slot="footer">
        <div class="alert-dialog-button" @click="alertDialog1Visible = false">取消</div>
        <div class="alert-dialog-button" @click="clearHistory">确认</div>
      </template>
    </v-ons-alert-dialog>
  </v-ons-page>
</template>

<script>
  import storage from '../../services/storage';
  import PostDetail from '../Forum/PostDetail.vue'
  import {getPostOverview} from '../../apis/forum/post'

  export default {
    mounted: function () {
      this.getList();
    },
    data: function () {
      return {
        alertDialog1Visible: false,
        getListFinished: false,
        historyList: []
      }
    },
    methods: {
      getList() {
        let history = storage.getObject('browsingHistory');
        if (!history) {
          history = [];
        }
        for (let h of history) {
          getPostOverview(h).then(response => {
            this.historyList.push(response.data);
            if (this.historyList.length === history.length) {
              this.getListFinished = true;
            }
          }, response => {
          })
        }
      },
      clearHistory() {
        this.alertDialog1Visible = false;
        this.$store.dispatch('history/clearBrowsingHistory');
        this.historyList = [];
      },
      pushPostDetail(postId) {
        this.$store.commit('navigator/push', {
          extends: PostDetail,
          data() {
            return {
              forumName: '历史记录',
              postId: postId
            }
          }
        });
      }
    }
  }
</script>

