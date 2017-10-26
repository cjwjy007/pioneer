<template>
  <v-ons-page>
    <v-ons-list>
      <div v-for="chat in chatList" :key="chat.name">
        <v-ons-list-item tappable modifier="chevron nodivider"
                         style="border-bottom: 1px solid #ccc;"
                         @click="pushPage({name:chat.name,icon:chat.icon})">
          <div class="left">
            <img class="chat-list-icon" :src="chat.icon">
          </div>
          <div class="center">
            <div style="width: 100%;">
              <span class="chat-list-name">{{chat.name}}</span>
              <b class="chat-list-time">{{chat.time}}</b>
            </div>
            <span class="chat-list-content">{{chat.content}}</span>
          </div>
        </v-ons-list-item>
      </div>
    </v-ons-list>
  </v-ons-page>
</template>

<script>

  import ChatDetail from './ChatDetail.vue';

  export default {
    data: function () {
      return {
        chatList: [{
          icon: "http://placekitten.com/g/40/40",
          name: 'Cutest kitty',
          content: 'On the Internet1',
          time: '12:15:30'
        }, {
          icon: "http://placekitten.com/g/41/40",
          name: 'Cutest kitty2',
          content: 'On the Internet2',
          time: '12:45:30'
        }, {
          icon: "http://placekitten.com/g/40/42",
          name: 'Cutest kitty3',
          content: 'On the Internet3',
          time: '12:25:30'
        }]
      }
    },
    methods: {
      pushPage(user) {
        this.$store.commit('navigator/options', {
          // Sets animations
          animation: 'default',
          // Resets default options
          callback: () => this.$store.commit('navigator/options', {})
        });
        this.$store.commit('navigator/push', {
          extends: ChatDetail,
          data() {
            return {
              user: user
            }
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chat-list-icon {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 0;
    float: left;
  }

  .chat-list-name {
    font-size: 17px;
  }

  .chat-list-content {
    opacity: 0.75;
    font-size: 14px;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    order: 1;
    -webkit-flex-basis: 100%;
    flex-basis: 100%;
    -webkit-align-self: flex-start;
    align-self: flex-start;
  }

  .chat-list-time {
    opacity: 0.75;
    float: right;
    font-size: 14px;
    margin-right: 30px;
  }
</style>
