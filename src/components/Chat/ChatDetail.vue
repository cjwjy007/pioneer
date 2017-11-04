<template>
  <v-ons-page id="chat-page">
    <custom-toolbar backLabel="Chat">
      <div slot="center">{{ user.name }}</div>
      <div slot="right"><img class="chat-detail-icon" :src="user.icon"></div>
    </custom-toolbar>
    <ul>
      <li v-for="(message, index) in messages" :key="message.content">
        <div class="message-wrapper">
          <div v-if="!message.sendOut">
            <span class="dateDetail" style="float:right">{{message.date }}</span>
            <img class="profile-pic left" :src="user.icon">
            <div class="chat-bubble-left">
              <span class="bubble-tri-left"></span>
              <div class="message">{{message.content}}</div>
            </div>
          </div>
          <div v-else>
            <span class="dateDetail" style="float:left">{{message.date }}</span>
            <img class="profile-pic right" :src="user.icon">
            <div class="chat-bubble-right">
              <span class="bubble-tri-right"></span>
              <div class="message">{{message.content}}</div>
            </div>
          </div>
        </div>
      </li>

    </ul>

    <div class="foot-wrapper">
      <input class="chat-input" type="text" name="" @keyup.enter="send(msg)" v-model="msg">
      <button class="chat-sub" @click="sendMsg"><i class="icon ion-paper-airplane"></i></button>
    </div>
  </v-ons-page>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: '',
        messages: [
          {
            date: '20 minute ago',
            content: 'test',
            sendOut: true,
          },
          {
            date: '15 minute ago',
            content: 'test1',
            sendOut: false,
          },
          {
            date: '4 minute ago',
            content: 'test2',
            sendOut: false,
          },
          {
            date: '1 minute ago',
            content: 'test3',
            sendOut: true,
          }
        ]
      }
    },
    methods: {
      sendMsg() {
        this.messages.push(
          {
            date: 'just now',
            content: this.msg,
            sendOut: true,
          }
        )
        this.msg = '';
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .foot-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #f1f1f1;
    height: 40px;
    flex-shrink: 0;
    display: flex;
    padding: 5px 0px;
    justify-content: space-between;
    border-top: solid 1px rgba(0, 0, 0, 0.1);
  }

  .chat-input {
    height: 100%;
    width: 87%;
    border-radius: 10px;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding: 5px;
    margin: 0 10px;
  }

  .chat-sub {
    height: 100%;
    font-size: 30px;
  }

  .chat-detail-icon {
    width: 35px;
    height: 35px;
    border-radius: 20px;
    margin: 4px 10px 4px 4px;
    float: right;
  }

  img.profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    bottom: 10px;
  }

  img.profile-pic.left {
    left: 10px;
    top: 10px;
    float: left;
    position: relative;
  }

  img.profile-pic.right {
    left: -8px;
    top: 10px;
    float: right;
    position: relative;
  }

  .message {
    font-size: 14px;
  }

  .bar.item-input-inset .item-input-wrapper input {
    width: 100% !important;
  }

  .message-wrapper {
    position: relative;
    overflow: auto;
  }

  .message-wrapper:last-child {
    margin-bottom: 10px;
  }

  .bubble-tri-left {
    display: inline-block;
    width: 0px;
    height: 0px;
    position: absolute;
    border-width: 8px 10px;
    border-style: solid;
    top: 12px;
    left: -17px;
    border-color: transparent #e6e5eb transparent transparent;
  }

  .bubble-tri-right {
    display: inline-block;
    width: 0px;
    height: 0px;
    position: absolute;
    border-width: 8px 10px;
    border-style: solid;
    top: 12px;
    right: -17px;
    border-color: transparent transparent transparent #158ffe;
  }

  .chat-bubble-left {
    border-radius: 5px;
    display: inline-block;
    padding: 10px 10px;
    position: relative;
    margin: 10px;
    max-width: 55%;
    background-color: #e6e5eb;
    float: left;
    margin-left: 20px;
  }

  .chat-bubble-right {
    border-radius: 5px;
    display: inline-block;
    padding: 10px 10px;
    position: relative;
    margin: 10px;
    max-width: 55%;
    background-color: #158ffe;
    color: #fff;
    float: right;
    margin-right: 20px;
  }

  .dateDetail {
    float: right;
    position: relative;
    top: 10px;
    font-size: 13px;
    font-weight: bold;
    margin-left: 7px;
    margin-right: 7px;
    color: #c0c0c0;
    display: -moz-inline-box;
    display: inline-block;
    width: 69px;
    text-align: center;
  }

  ul {
    margin: 0;
    padding: 0
  }

  li {
    list-style-type: none;
  }

</style>
