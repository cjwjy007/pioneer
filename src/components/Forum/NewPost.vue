<template>
  <v-ons-page>
    <custom-toolbar backLabel="返回" title="主题">
    </custom-toolbar>
    <v-ons-card class="new-post-card">
      <ul class="list list--material">
        <li class="list__item list__item--material post-list-header">
          <div class="list__item__center list__item--material__center">
            <textarea class="textarea--transparent" rows="1" placeholder="请输入标题" v-model="newPost.postTitle"
                      style="font-size:20px;overflow: hidden"></textarea>
          </div>
        </li>
        <li class="list__item list__item--material  post-list-body">
          <div class="list__item__center list__item--material__center">
            <textarea class="textarea--transparent" rows="25" placeholder="请输入内容" v-model="newPost.postContent"
            ></textarea>
          </div>
        </li>
      </ul>
    </v-ons-card>

    <div class="bottom-bar">
      <div class="bottom-bar__line-height" style="text-align:center">
        <button class="button button--large" style="-webkit-border-radius: 0;border-radius: 0;" @click="sendPost">发送
        </button>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import {sendNewPost} from '../../apis/forum/post'

  export default {
    data: function () {
      return {
        newPost: {
          postTitle: null,
          postContent: null,
          postType: null
        }
      }
    },
    methods: {
      sendPost() {
        if(!this.newPost.postTitle){
          this.$ons.notification.toast('请输入帖子标题', { animation: "fall", buttonLabel: 'x', timeout: 1500 });
          return;
        }
        if(!this.newPost.postContent){
          this.$ons.notification.toast('请输入帖子内容', { animation: "fall", buttonLabel: 'x', timeout: 1500 });
          return;
        }
        if (!this.newPost.postType) {
          this.newPost.postType = this.forumName;
        }
        sendNewPost(this.newPost).then(response => {
          this.$ons.notification.toast('发帖成功', { animation: "fall", buttonLabel: 'x', timeout: 1500 });
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

  .new-post-card{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 50px;
    top: 0;
  }
</style>
