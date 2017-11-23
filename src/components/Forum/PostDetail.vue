<template>
  <v-ons-page>
    <custom-toolbar :backLabel="forumName" title="主题">
      <div slot="right">
        <ons-toolbar-button  @click="$ons.openActionSheet({
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
    <v-ons-card style="text-align: center;font-size: 18px">
      <b>{{postId}}</b>
    </v-ons-card>
    <div v-for="post in postContents" :key="post.floor">
      <v-ons-card style="padding-bottom: 40px">
        <div class="home-posts-header">
          <img class="home-posts-header-icon" :src="post.icon">
          <div class="home-posts-header-info">
            <div>
              <b>{{post.name}}</b>
              <span class="pull-right">{{post.floor}}楼</span>
            </div>
          </div>
        </div>

        <div class="post-content">
          <div>
            {{post.content}}
          </div>
        </div>

        <div class="footer">
          <div class="pull-right">
            <ons-row class="home-icon-group">
              <ons-col>
                <ons-button modifier="quiet">
                  <ons-icon icon="ion-thumbsup"></ons-icon>
                </ons-button>
              </ons-col>
              <ons-col>
                <ons-button modifier="quiet">
                  <ons-icon icon="ion-chatbox-working"></ons-icon>
                </ons-button>
              </ons-col>
              <ons-col>
                <ons-button modifier="quiet">
                  <ons-icon icon="ion-heart"><span>{{post.likes}}</span></ons-icon>
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
  export default {
    data: function () {
      return {
        postContents: [
          {
            floor: 1,
            name: 'foo',
            icon: 'http://placekitten.com/g/327/200',
            content: '由香港教育局组织的“同根同心—香港初中及高小学生内地交流计划系列团”，计划于2017年11月至2018年2月组织约2600名香港小学师生分批前往上海参观交流。'
          },
          {
            floor: 2,
            name: 'foo2',
            icon: 'http://placekitten.com/g/327/201',
            content: '11月2日下午，香港基督教粉岭神召会小学的125名师生前往浦东新区洋泾实验小学参观交流。!'
          }
        ]
      }
    },
    methods: {}
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
