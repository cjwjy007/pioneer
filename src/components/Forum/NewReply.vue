<template>
  <v-ons-page>
    <custom-toolbar backLabel="返回" title="回复">
    </custom-toolbar>
    <v-ons-card class="new-post-card">
      <ul class="list list--material">
        <li class="list__item list__item--material  post-list-body">
          <div class="list__item__center list__item--material__center">
            <textarea class="textarea--transparent" rows="25" placeholder="请输入回复内容" v-model="newReply.content"
            ></textarea>
          </div>
        </li>
      </ul>
    </v-ons-card>

    <div class="bottom-bar">
      <div class="bottom-bar__line-height" style="text-align:center">
        <button class="button button--large" style="-webkit-border-radius: 0;border-radius: 0;" @click="sendReply">发送
        </button>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import {sendNewReply} from '../../apis/forum/post'

  export default {
    mounted() {
      console.log(this.postId);
      if (this.replyTo) {
        this.newReply.content = `回复 ${this.replyTo} :\n`;
        this.newReply.replyTo = this.replyTo;
      }
    },
    data: function () {
      return {
        newReply: {
          content: null,
          postId: null,
          replyTo: null
        }
      }
    },
    methods: {
      sendReply() {
        if (!this.newReply.content) {
          this.$ons.notification.toast('请输入回复内容', {animation: "fall", buttonLabel: 'x', timeout: 1500});
          return;
        }
        if (!this.newReply.postId) {
          this.newReply.postId = this.postId;
        }
        sendNewReply(this.newReply).then(response => {
          this.$ons.notification.toast('回复成功', {animation: "fall", buttonLabel: 'x', timeout: 1500});
          this.$store.commit('navigator/pop');
        }, response => {
          console.log(response);
        });
      }
    }
  }
</script>

<style scoped>
  textarea {
    width: 100%;
  }

  .post-list-header {
    border-bottom: 1px #cccccc solid;
    padding: 5px;
  }

  .post-list-body {
    padding: 5px;
  }

  .new-post-card {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 50px;
    top: 0;
  }
</style>
